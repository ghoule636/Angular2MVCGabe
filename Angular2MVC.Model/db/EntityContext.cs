using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2MVC.Model.db
{
    public class EntityContext : DbContext
    {
        public EntityContext()
            : base("Angular2MVC_DB")
        {
            Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Address> Addresses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .Property(e => e.CompanyID).IsRequired();
            modelBuilder.Entity<Employee>()
                .Property(e => e.AddressID).IsRequired();
        }

    }
}
