using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.DependencyInjection.Swagger
{
    [ExcludeFromCodeCoverage]
    public static class SwaggerExtensions
    {
        public static IServiceCollection AddSwaggerConfiguration(this IServiceCollection services)
        {
            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

            services.AddSwaggerGen();

            return services;
        }

        public static IServiceCollection AddVersioning(this IServiceCollection services)
        {
            services.AddApiVersioning(c=>
            {
                c.DefaultApiVersion = new ApiVersion(1, 0);
                c.ReportApiVersions = true;
                c.AssumeDefaultVersionWhenUnspecified = true;
            });

            services.AddVersionedApiExplorer(c =>
            {
                c.GroupNameFormat = "'v'VVV";
                c.SubstituteApiVersionInUrl = true;
            });

            return services;
        }

        public static IApplicationBuilder UseSwaggerConfiguration(this IApplicationBuilder app, IApiVersionDescriptionProvider provider, string appNamespace)
        {
            app.UseSwagger(c =>
            {
                c.PreSerializeFilters.Add((document, request) =>
                {
                    var address = $"{request.Host.Value}/{(!request.Host.Host.Equals("localhost", StringComparison.OrdinalIgnoreCase) ? appNamespace : string.Empty)}";

                    document.Servers = new List<OpenApiServer>
                    {
                        new OpenApiServer { Url = $"https://{address}"},
                        new OpenApiServer { Url = $"http://{address}"},
                    };
                });
            });

            app.UseSwaggerUI(c =>
            {
                foreach (var description in provider.ApiVersionDescriptions)
                {
                    var notice = description.IsDeprecated ? "This API version has been deprecated." : string.Empty;

                    c.SwaggerEndpoint(
                         $"./{description.GroupName}/swagger.json"
                        , $"Corporate Security Connect Producer: {description.GroupName.ToUpperInvariant()}" + notice);
                }
            });

            return app;
        }
    }
}
