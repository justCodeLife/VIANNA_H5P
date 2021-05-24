using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DotNetEnv;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;

namespace vianna_h5p.Middlewares
{
    public class JWTMiddleware
    {
        private readonly RequestDelegate _next;

        public JWTMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var token = context.Request.Cookies["token"] ?? context.Request.Query["token"];
            if (token != null)
            {
                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes(Env.GetString("JWT_SECRET"));
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ClockSkew = TimeSpan.Zero
                    }, out SecurityToken validatedToken);

                    var jwtToken = (JwtSecurityToken) validatedToken;
                    context.Items["user_id"] = int.Parse(jwtToken.Claims.First(x => x.Type == "nameid").Value);

                    // var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "nameid").Value);
                    // context.Items["user_id"] = await _db.QuerySingleAsync<User>("select id,name,username from users where id=@id", new {id = userId});
                }
                catch
                {
                    // do nothing if jwt validation fails
                    // account is not attached to context so request won't have access to secure routes
                }
            }

            if (context.Items["user_id"] == null)
            {
                await context.Response.WriteAsJsonAsync(new
                {
                    error = "دسترسی غیر مجاز می باشد"
                });
                return;
            }

            await _next(context);
        }
    }

    public static class JWTMiddlewareExtensions
    {
        public static IApplicationBuilder UseJWTMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<JWTMiddleware>();
        }
    }

    public class JWTMiddlewareAnnotation
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseMiddleware<JWTMiddleware>();
        }
    }
}