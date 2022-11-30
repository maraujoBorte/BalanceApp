using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Balance.Application.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.DependencyInjection.Extensions
{
    [ExcludeFromCodeCoverage]
    public static class BehaviorsExtension
    {
        public static IServiceCollection AddFailFastValidationBehavior(this IServiceCollection services, ServiceLifetime lifetime = ServiceLifetime.Scoped)
        {
            ServiceDescriptor item = new (typeof(IPipelineBehavior<,>), typeof(FailFastValidationBehavior<,>), lifetime);

            services.Add(item);

            return services;
        }
    }
}
