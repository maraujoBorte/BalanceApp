using Microsoft.Extensions.DependencyInjection;
using Balance.Application.UseCases.Transaction.InsertTransaction;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.DependencyInjection.Extensions
{
    [ExcludeFromCodeCoverage]
    public static class ApplicationExtensions
    {
        public static IServiceCollection AddUseCases(this IServiceCollection services)
        {
            services.AddScoped<IInsertTransactionUseCase, InsertTransaction>();

            return services;
        }
    }
}
