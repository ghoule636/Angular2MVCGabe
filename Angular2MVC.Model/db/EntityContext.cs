using System.Data.Entity;

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
        public DbSet<Part> Parts { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .Property(e => e.CompanyID).IsRequired();
            modelBuilder.Entity<Employee>()
                .Property(e => e.AddressID).IsRequired();
        }
    }
}
