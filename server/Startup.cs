using System;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DotNetEnv;
using Microsoft.Extensions.FileProviders;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Http;
using vianna_h5p.Jobs;
using vianna_h5p.Services;

namespace vianna_h5p
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            Env.Load();
            services.AddControllers();
            services.AddTransient<IDbConnection>(_ =>
                new SqlConnection(
                    $"Server={Env.GetString("DB_HOST")};Database={Env.GetString("DB_DATABASE")};User Id={Env.GetString("DB_USERNAME")};Password={Env.GetString("DB_PASSWORD")};"));

            services.AddCors(options =>
            {
                options.AddPolicy("CORS",
                    builder =>
                    {
                        builder.SetIsOriginAllowed(_ => true).AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                    });
            });
            services.AddRazorPages();
            services.AddCronJob<DeleteTempFiles>(c =>
            {
                c.TimeZoneInfo = TimeZoneInfo.Local;
                c.CronExpression = @"* * * * *";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors("CORS");

            // app.UseAuthorization();
            // app.UseJWTMiddleware();
            //or
            // app.UseMiddleware(typeof(JWTMiddleware));
            //or
            // app.UseMiddleware<JWTMiddleware>();

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(env.ContentRootPath, "Public")),
                RequestPath = ""
            });

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/{url?}",
                    async context => { await context.Response.SendFileAsync("Public/index.html"); });
            });
        }
    }
}