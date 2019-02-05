using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2MVC.Model.db
{
    public class Company
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public virtual List<Employee> Employees { get; set; }

        public Company()
        {
            Employees = new List<Employee>();
        }
    }
}
