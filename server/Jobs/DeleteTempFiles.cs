using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using vianna_h5p.Services;

namespace vianna_h5p.Jobs
{
    public class DeleteTempFiles : CronJob
    {
        private readonly IWebHostEnvironment _env;

        public DeleteTempFiles(IScheduleConfig<DeleteTempFiles> config, IWebHostEnvironment env) : base(
            config.CronExpression,
            config.TimeZoneInfo)
        {
            _env = env;
        }

        protected override Task DoWork(CancellationToken cancellationToken)
        {
            try
            {
                Directory.Delete($"{_env.ContentRootPath}/Public/temp", true);
            }
            catch (Exception e)
            {
                Console.WriteLine("----------------------------Cannot delete temp folder-----------------------------");
                Console.WriteLine(e);
                Console.WriteLine("----------------------------------------------------------------------------------");
            }

            return Task.CompletedTask;
        }
    }
}