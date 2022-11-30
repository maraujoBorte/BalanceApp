using Balance.Application.DependencyInjection.Extensions;
using Balance.Infrastructure.Database.DependencyInjection.Extensions;
using Balance.WebApi.DependencyInjection.Swagger;
using Microsoft.AspNetCore.Mvc.ApiExplorer;

namespace Balance.WebApi
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services
                .AddVersioning()
                .AddUseCases()
                .AddMediatorToUseCases()
                .AddFailFastValidationBehavior()
                .AddLogging()
                .AddCors()
                .AddSwaggerConfiguration()
                .AddSqlServerDbContext(_configuration)
                .AddHealthChecks();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider apiVersionProvider)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app
                .UseRouting()
                .UseHttpsRedirection()
                .UseAuthorization()
                .UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials())
                .UseSwaggerConfiguration(apiVersionProvider, "balance-web-api")
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                });

        }
    }
}
