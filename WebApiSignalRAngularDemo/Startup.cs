using Owin;
using System.Web.Http;

namespace WebApiSignalRAngularDemo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}");

            app.UseWebApi(config);
        }
    }
}