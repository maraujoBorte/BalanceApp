using Balance.Worker.Data;
using Balance.Worker.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Data.SqlClient;

namespace Balance.Worker
{
    public class DependencyInjection
    {
        public ServiceProvider Services { get; set; }

        public DependencyInjection()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsetings.json");

            var configuration = builder.Build();    

            Services = new ServiceCollection()
                .AddSingleton(new SqlConnection(configuration.GetConnectionString("SqlServerDbContext")))
                .AddSingleton<IConfiguration>(configuration)
                .AddTransient<IRepository,Repository>()
                .AddTransient<IEmailService, EmailService>()
                .BuildServiceProvider();
        }
    }
}
