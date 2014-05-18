using System;
using System.Web.Optimization;
using WebApiSignalRAngularDemo.Server;

namespace WebApiSignalRAngularDemo
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}