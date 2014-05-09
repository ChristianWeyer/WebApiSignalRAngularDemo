using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebApiSignalRAngularDemo
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
    }

    public class ProductsController : ApiController
    {
        public IEnumerable<Product> GetData()
        {
            // TODO: Talk to BL... EF... IDataReader...
            var p = new List<Product>();
            p.Add(new Product { Id = 1, Title = "Super lecker Pudding", Description = "Blaaa blaaa blubbb", Amount = 8 });
            p.Add(new Product { Id = 2, Title = "Mjamm-mjamm Gurken", Description = "Yadda yadda yad", Amount = 149 });
            p.Add(new Product { Id = 3, Title = "Mhhhh Salzstangen", Description = "Momm momm mom", Amount = 53 });

            return p;
        }
    }
}