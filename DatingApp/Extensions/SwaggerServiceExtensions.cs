using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Extensions
{
    public static class SwaggerServiceExtensions
    {

        public static IServiceCollection AddSwaggerServices(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "DatingApp", Version = "v1" });
            });

            return services;
        }
    }
}
