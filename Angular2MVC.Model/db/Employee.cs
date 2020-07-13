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
    [Table("Employee")]
    [Count]
    [Page]
    [OrderBy]
    [Expand]
    public class Employee
    {
        [Key]
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public int AddressID { get; set; }
        public virtual Address Address { get; set; }

        public int CompanyID { get; set; }
        public virtual Company Company { get; set; }
    }
}
