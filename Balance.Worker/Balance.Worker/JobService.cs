using Balance.Worker.Service;
using Microsoft.Extensions.DependencyInjection;
using Quartz;

namespace Balance.Worker
{
    [DisallowConcurrentExecution]
    public class JobService : IJob
    {
        public async Task Execute(IJobExecutionContext context)
        {
            await Task.Run(() => Run());
        }

        public void Run()
        {
            var injection = new DependencyInjection();

            var schedule = injection.Services.GetService<IEmailService>()!;

            schedule.SendEmail();
        }
    }
}
