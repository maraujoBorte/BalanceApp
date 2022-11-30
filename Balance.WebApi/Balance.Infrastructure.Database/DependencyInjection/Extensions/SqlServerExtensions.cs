using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Balance.Infrastructure.Database.Configuration;
using Balance.Infrastructure.Database.Context;
using Balance.Infrastructure.Database.Repositories;
using Balance.Domain.Transaction;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.DependencyInjection.Extensions
{
    [ExcludeFromCodeCoverage]
    public static class SqlServerExtensions
    {
        public static IServiceCollection AddSqlServerDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            var config = new BalanceConfiguration() { ConnectionStringTrConfiguration = configuration.GetConnectionString("SqlServerDbContext") };

            services.AddSingleton(config);
            services.AddScoped<IConnection, Connection>();

            services.AddScoped<ITransactionRepository, TransactionRepository>();
            services.AddScoped<ISqlServerDbContext, SqlServerDbContext>();

            return services;
        }
    }
}
