using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Angular2MVC.Model.db;

namespace Angular2MVC.Model
{
    public class EntityInitializer : DropCreateDatabaseIfModelChanges<db.EntityContext>
    {
        /// <summary>
        /// This function creates mock data for the db is the model has changed at all
        /// so that the new db model can be refreshed. Might have to change the Get methods
        /// below if the context changes so that the data will populate the new columns.
        /// </summary>
        /// <param name="context"></param>
        protected override void Seed(EntityContext context)
        {
            //Companies 
            GetCompanies().ForEach(c => context.Companies.Add(c));

            // Addresses
            GetAddresses().ForEach(a => context.Addresses.Add(a));

            // Employees
            GetEmployees().ForEach(e => context.Employees.Add(e));


            base.Seed(context);
        }

        private static List<Company> GetCompanies()
        {
            List<Company> _companies = new List<Company>();

            for (int i = 1; i <= 10; i++)
            {
                _companies.Add(new Company()
                {
                    ID = i,
                    Name = MockData.Company.Name()
                });
            }

            return _companies;
        }

        private static List<Address> GetAddresses()
        {
            List<Address> _addresses = new List<Address>();
 
            for (int i = 1; i <= 200; i++)
            {
                _addresses.Add(new Address()
                {
                    ID = i,
                    City = MockData.Address.City(),
                    Country = MockData.Address.Country(),
                    State = MockData.Address.State(),
                    ZipCode = MockData.Address.ZipCode()
                });
            }
 
            return _addresses;
        }
 
        private static List<Employee> GetEmployees()
        {
            List<Employee> _employees = new List<Employee>();
 
            for (int i = 1; i <= 200; i++)
            {
                _employees.Add(new Employee()
                {
                    ID = i,
                    FirstName = MockData.Person.FirstName(),
                    Surname = MockData.Person.Surname(),
                    AddressID = i,
                    CompanyID = new Random().Next(1, 10),
                    Email = MockData.Internet.Email(),
                });
            }
 
            return _employees;
        }

    }
}
