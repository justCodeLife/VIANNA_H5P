using System;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using DotNetEnv;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using vianna_h5p.DTOs;
using vianna_h5p.Helpers;
using vianna_h5p.Models;

namespace vianna_h5p.Controllers
{
    [CheckProdMode]
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private IDbConnection _db;

        public AuthController(IDbConnection db)
        {
            _db = db;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                var user = await _db.QuerySingleAsync<User>(
                    "select * from users where username=@username and password=@password",
                    new {request.username, request.password});
                if (user == null || Convert.IsDBNull(user))
                    return Json(new
                    {
                        error = "کاربر مورد نظر یافت نشد"
                    });
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(Env.GetString("JWT_SECRET"));
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new(ClaimTypes.NameIdentifier, user.id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(3),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var cookieOptions = new CookieOptions
                {
                    // HttpOnly = true,
                    Expires = DateTime.UtcNow.AddDays(3)
                };
                var tokenValue = tokenHandler.WriteToken(token);
                Response.Cookies.Append("token", tokenValue, cookieOptions);
                return Json(new
                {
                    success = true,
                    token = tokenValue,
                    user
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "ورود با خطا مواجه شد"
                });
            }
        }

        [HttpPost("logout")]
        public ActionResult Logout()
        {
            Response.Cookies.Delete("token");
            return Json(new
            {
                success = true,
                msg = "خروج با موفقیت انجام شد"
            });
        }

        [HttpGet("get_logged_in_user")]
        public async Task<JsonResult> GetLoggedInUser()
        {
            try
            {
                var token = HttpContext.Request.Cookies["token"];
                if (token == null)
                {
                    return Json(new
                    {
                        error = "توکن یافت نشد"
                    });
                }

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
                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "nameid").Value);
                var user = await _db.QuerySingleAsync<User>("select id,name,username from users where id=@id",
                    new {id = userId});
                if (user == null || Convert.IsDBNull(user))
                {
                    return Json(new
                    {
                        error = "کاربر مورد نظر یافت نشد"
                    });
                }

                return Json(user);
            }
            catch
            {
                return Json(new
                {
                    error = "دریافت اطلاعات با خطا مواجه شد"
                });
            }
        }
    }
}