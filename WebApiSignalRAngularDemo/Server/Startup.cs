using Owin;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Optimization;
using WebApiSignalRAngularDemo.Server;

namespace WebApiSignalRAngularDemo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var config = new HttpConfiguration();
            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}");
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());

            app.UseWebApi(config);

            app.MapSignalR();
        }
    }
}