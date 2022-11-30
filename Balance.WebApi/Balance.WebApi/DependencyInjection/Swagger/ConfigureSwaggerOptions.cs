﻿using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;

namespace Balance.WebApi.DependencyInjection.Swagger
{

    [ExcludeFromCodeCoverage]
    public class ConfigureSwaggerOptions : IConfigureOptions<SwaggerGenOptions>
    {
        private readonly IApiVersionDescriptionProvider _provider;


        public ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider)
        {
            _provider = provider;
        }

        public void Configure(SwaggerGenOptions options)
        {
            foreach (var description in _provider.ApiVersionDescriptions)
            {
                options.SwaggerDoc(description.GroupName, CreateInfoForApiVersion(description));
            }
        }

        private static OpenApiInfo CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var dateVersion = File.GetCreationTime(Assembly.GetExecutingAssembly().Location);

            var deprecated = description.IsDeprecated ? "This API version has been deprecated." : string.Empty;
            var openApiInfo = new OpenApiInfo()
            {
                Title = "Balance.WebApi",
                Description = "Api for register all financial data" + deprecated,
                Version = description.ApiVersion.ToString(),
                License = new OpenApiLicense { Name = $"Version generation date {dateVersion:dd/MM/yyyy HH:mm:ss}" },
                Contact = new OpenApiContact()
                {
                    Name = "Matheus Borte",
                    Email = "matheusborte@hotmail.com"
                }
            };

            return openApiInfo;
        }
    }
}
