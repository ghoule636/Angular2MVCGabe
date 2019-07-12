using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Angular2MVC.Model.db;
using Microsoft.AspNet.OData;

namespace Angular2MVCGabe.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Angular2MVC.Model.db;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Address>("Addresses");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AddressesController : ODataController
    {
        private EntityContext db = new EntityContext();

        // GET: odata/Addresses
        [EnableQuery]
        public IQueryable<Address> GetAddresses()
        {
            return db.Addresses;
        }

        // GET: odata/Addresses(5)
        [EnableQuery]
        public SingleResult<Address> GetAddress([FromODataUri] int key)
        {
            return SingleResult.Create(db.Addresses.Where(address => address.ID == key));
        }

        // PUT: odata/Addresses(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<Address> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Address address = db.Addresses.Find(key);
            if (address == null)
            {
                return NotFound();
            }

            patch.Put(address);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddressExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(address);
        }

        // POST: odata/Addresses
        public IHttpActionResult Post(Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Addresses.Add(address);
            db.SaveChanges();

            return Created(address);
        }

        // PATCH: odata/Addresses(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<Address> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Address address = db.Addresses.Find(key);
            if (address == null)
            {
                return NotFound();
            }

            patch.Patch(address);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddressExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(address);
        }

        // DELETE: odata/Addresses(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            Address address = db.Addresses.Find(key);
            if (address == null)
            {
                return NotFound();
            }

            db.Addresses.Remove(address);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AddressExists(int key)
        {
            return db.Addresses.Count(e => e.ID == key) > 0;
        }
    }
}
