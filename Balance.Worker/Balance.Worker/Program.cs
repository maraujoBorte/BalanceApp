using Balance.Worker;
using Topshelf;


var rc = HostFactory.Run(x =>
{
    x.Service<Schedule>(s =>
    {
        s.ConstructUsing(name => new Schedule());
        s.WhenStarted(tc=> tc.Start());
        s.WhenStopped(tc=> tc.Stop());
    });

    x.RunAsLocalService();

    x.SetDescription("Balance.Worker");
    x.SetDisplayName("Balance.Worker");
    x.SetServiceName("Balance.Worker");
});

var exitCode = (int)Convert.ChangeType(rc, rc.GetTypeCode());
Environment.ExitCode = exitCode;