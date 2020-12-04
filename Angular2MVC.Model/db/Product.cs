using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2MVC.Model.db
{
    [Table("Product")]
    public class Product
    {
        public int ID { get; set; }
        public string ProductName { get; set; }
    }
}
