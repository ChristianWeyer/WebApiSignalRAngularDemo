using System.Web.Optimization;
using Owin;
using System.Web.Http;
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

            app.UseWebApi(config);

            app.MapSignalR();
        }
    }
}