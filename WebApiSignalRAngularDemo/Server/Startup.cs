using Owin;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Optimization;
using Microsoft.Owin.Cors;
using WebApiSignalRAngularDemo.Server;

namespace WebApiSignalRAngularDemo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            app.UseCors(CorsOptions.AllowAll);

            var config = new HttpConfiguration();
            config.EnableCors(new EnableCorsAttribute("*","*","*"));
            
            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}");

            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());

            app.UseWebApi(config);

            app.MapSignalR();
        }
    }
}