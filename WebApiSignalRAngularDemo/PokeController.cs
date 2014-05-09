using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.SignalR;

namespace WebApiSignalRAngularDemo
{
    public class PokeController : ApiController
    {
        [HttpGet]
        public void DoPoke()
        {
            var hub =GlobalHost.ConnectionManager.GetHubContext<PokeHub>();
            hub.Clients.All.pokeIt();
        }
    }
}