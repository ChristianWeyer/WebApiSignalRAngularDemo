using System;
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
                Console.WriteLine("Web API server running...");
                Console.ReadLine();
            }
        }
    }
}
