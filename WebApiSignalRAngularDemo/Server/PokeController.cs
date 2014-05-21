using Microsoft.AspNet.SignalR;
using System.Web.Http;

namespace WebApiSignalRAngularDemo
{
    public class PokeController : ApiController
    {
        [HttpGet]
        public void DoPoke(string data)
        {
            var hub = GlobalHost.ConnectionManager.GetHubContext<PokeHub>();
            hub.Clients.All.poke(data);
        }
    }
}