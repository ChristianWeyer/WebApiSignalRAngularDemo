using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin.Hosting;
using WebApiSignalRAngularDemo;

namespace ConsoleHost
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var server = WebApp.Start<Startup>("http://localhost:9999"))
            {
                Console.WriteLine("Server running...");
                Console.ReadLine();
            }
        }
    }
}
