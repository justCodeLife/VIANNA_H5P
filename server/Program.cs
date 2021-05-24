using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace vianna_h5p
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseUrls("http://0.0.0.0:1337");
                    webBuilder.UseStartup<Startup>();
                });
    }
}