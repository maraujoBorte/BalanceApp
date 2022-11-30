using Microsoft.Extensions.DependencyInjection;
using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.DependencyInjection.Extensions
{
    [ExcludeFromCodeCoverage]
    public static class MediatorExtension
    {
        public static  IServiceCollection AddMediatorToUseCases(this IServiceCollection services, string partOfAssemblyName = "Application")
        {
            var f = AppDomain.CurrentDomain.GetAssemblies().SingleOrDefault(x => x.GetName().Name!.Contains(partOfAssemblyName));

            services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies().SingleOrDefault(x=> x.GetName().Name!.Contains(partOfAssemblyName)));

            return services;
        }
    }
}
