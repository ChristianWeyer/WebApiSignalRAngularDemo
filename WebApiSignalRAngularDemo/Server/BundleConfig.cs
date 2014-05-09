using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace WebApiSignalRAngularDemo.Server
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.Bundles.Add(new StyleBundle("~/app/css")
               .IncludeDirectory("~/libs", "*.css", true)
               .IncludeDirectory("~/app", "*.css", true)
               );

            BundleTable.Bundles.Add(new ScriptBundle("~/app/js")
                .IncludeDirectory("~/libs", "*.js", true)
                .IncludeDirectory("~/app", "*.js", true)
                );
        }
    }
}