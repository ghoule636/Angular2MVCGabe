using Microsoft.AspNet.OData.Query;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2MVC.Model.db
{
    [Table("Company")]
    [Expand]
    public class Company
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }

        public virtual List<Employee> Employees { get; set; }

        public Company()
        {
            Employees = new List<Employee>();
        }
    }
}
