using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Angular2MVC.Model.db;
using Microsoft.AspNet.OData;

namespace Angular7MVCGabe.Controllers.odata
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Angular2MVC.Model.db;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Company>("Companies1");
    builder.EntitySet<Employee>("Employees"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class Companies1Controller : ODataController
    {
        private EntityContext db = new EntityContext();

        // GET: odata/Companies1
        [EnableQuery]
        public IQueryable<Company> GetCompanies1()
        {
            return db.Companies;
        }

        // GET: odata/Companies1(5)
        [EnableQuery]
        public SingleResult<Company> GetCompany([FromODataUri] int key)
        {
            return SingleResult.Create(db.Companies.Where(company => company.ID == key));
        }

        // PUT: odata/Companies1(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<Company> patch)
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

        // POST: odata/Companies1
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

        // PATCH: odata/Companies1(5)
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

        // DELETE: odata/Companies1(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            Company company = db.Companies.Find(key);
            if (company == null)
            {
                return NotFound();
            }

            db.Companies.Remove(company);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Companies1(5)/Employees
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
