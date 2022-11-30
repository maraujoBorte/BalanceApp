using Balance.WebApi;
using Prometheus.DotNetRuntime;
using Serilog;

public static class Program
{
    public static async Task Main(string[] args)
    {
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile(path: "appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile(path: $"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: false, reloadOnChange: true)
            .Build();

        Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .Enrich.FromLogContext()
            .WriteTo.Console()
            .CreateLogger();
        try
        {
            using (DotNetRuntimeStatsBuilder.Default().StartCollecting())
                await CreateHostBuilder(args).Build().RunAsync();

            Log.Information("Stopped cleanly");
        }
        catch (Exception ex)
        {
            Log.Fatal(ex, "An unhaled exception occured during bootstrapping");
        }
        finally
        {
             Log.CloseAndFlush();
        }

    }

    private static IHostBuilder CreateHostBuilder(string[] args)
        => Host.CreateDefaultBuilder(args)
        .UseSerilog()
        .ConfigureWebHostDefaults(webBuilder => webBuilder.UseStartup<Startup>())
        .UseDefaultServiceProvider(
            (context, options) =>
            {
                options.ValidateScopes = context.HostingEnvironment.IsDevelopment();
                options.ValidateOnBuild = true;
            });
}