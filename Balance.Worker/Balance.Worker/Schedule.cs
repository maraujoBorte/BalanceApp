using Quartz;
using Quartz.Impl;
using System.Collections.Specialized;

namespace Balance.Worker
{
    public class Schedule
    {
        private readonly IScheduler scheduler;
        public Schedule()
        {
            NameValueCollection props = new()
            {
                { "quartz.serializer.type", "binary" },
                { "quartz.scheduler.instanceName", "Balance.Worker" },
                { "quartz.jobStore.type", "Quartz.Simpl.RAMJobStore, Quartz" },
                { "quartz.threadPool.threadCount", "5" }
            };

            StdSchedulerFactory factory = new(props);

            scheduler = factory.GetScheduler().ConfigureAwait(false).GetAwaiter().GetResult();
        }

        public void Start()
        {
            scheduler.Start().ConfigureAwait(false).GetAwaiter().GetResult();

            ScheduleJobs();
        }

        public void ScheduleJobs()
        {
            IJobDetail builder = JobBuilder.Create<JobService>()
                .WithIdentity("Balance.Worker_Job", "Balance.Worker_Group")
                .Build();

            ITrigger builderTrigger = TriggerBuilder.Create()
                .WithIdentity("Balance.Worker_Trigger", "Balance.Worker_Group")
                .StartNow()
                 .WithCronSchedule("0 0/1 * 1/1 * ? *") //Roda de 1 em 1 minuto, para mudar gerar cron no site ex. http://www.cronmaker.com/
                .Build();

            scheduler.ScheduleJob(builder, builderTrigger).ConfigureAwait(false).GetAwaiter().GetResult();
        }

        public void Stop()
        {
            scheduler.Shutdown().ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}
