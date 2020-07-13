using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Angular2MVC.Model.db;
using Castle.Core.Logging;
using Microsoft.AspNet.OData;

namespace Angular2MVCGabe.Controllers.odata
{
  /*
  The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

  using System.Web.Http.OData.Builder;
  using System.Web.Http.OData.Extensions;
  using Angular2MVC.Model.db;
  ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
  builder.EntitySet<Employee>("Employees");
  builder.EntitySet<Address>("Addresses");
  builder.EntitySet<Company>("Companies"); 
  config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
  */
  public class CompaniesController : ODataController
    {
        private EntityContext db = new EntityContext();
        public ILogger Logger { get; set; } = NullLogger.Instance;

        // GET: odata/Companies
        [EnableQuery]
        public IQueryable<Company> GetCompanies()
        {
            return db.Companies;
        }

        // GET: odata/Companies(5)
        [EnableQuery]
        public SingleResult<Company> GetCompany([FromODataUri] int key)
        {
            return SingleResult.Create(db.Companies.Where(company => company.ID == key));
        }

        // PUT: odata/Companies(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<Company> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                Logger.WarnFormat("Company {0} was attempted to be added to the database. It had the following ModelState: {1}", patch, ModelState);
                return BadRequest(ModelState);
            }

            Company company = db.Companies.Find(key);
            if (company == null)
            {
                return NotFound();
            }

            patch.Put(company);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(company);
        }

        // POST: odata/Companies
        public IHttpActionResult Post(Company company)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Companies.Add(company);
            db.SaveChanges();

            return Created(company);
        }

        // PATCH: odata/Companies(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<Company> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Company company = db.Companies.Find(key);
            if (company == null)
            {
                return NotFound();
            }

            patch.Patch(company);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(company);
        }

        // DELETE: odata/Companies(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            Company company = db.Companies.Find(key);
            if (company == null)
            {
                return NotFound();
            }

            db.Companies.Remove(company);
            db.SaveChanges();
            Logger.InfoFormat("{0} was removed from the database!", company);

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Companies(5)/Employees
        [EnableQuery]
        public IQueryable<Employee> GetEmployees([FromODataUri] int key)
        {
            return db.Companies.Where(m => m.ID == key).SelectMany(m => m.Employees);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CompanyExists(int key)
        {
            return db.Companies.Count(e => e.ID == key) > 0;
        }
    }
}
