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
    builder.EntitySet<Part>("Parts");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class PartsController : ODataController
    {
        private EntityContext db = new EntityContext();

        // GET: odata/Parts
        [EnableQuery]
        public IQueryable<Part> GetParts()
        {
            return db.Parts;
        }

        // GET: odata/Parts(5)
        [EnableQuery]
        public SingleResult<Part> GetPart([FromODataUri] int key)
        {
            return SingleResult.Create(db.Parts.Where(part => part.ID == key));
        }

        // PUT: odata/Parts(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<Part> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Part part = db.Parts.Find(key);
            if (part == null)
            {
                return NotFound();
            }

            patch.Put(part);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(part);
        }

        // POST: odata/Parts
        public IHttpActionResult Post(Part part)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Parts.Add(part);
            db.SaveChanges();

            return Created(part);
        }

        // PATCH: odata/Parts(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<Part> patch)
        {
            //Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Part part = db.Parts.Find(key);
            if (part == null)
            {
                return NotFound();
            }

            patch.Patch(part);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(part);
        }

        // DELETE: odata/Parts(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            Part part = db.Parts.Find(key);
            if (part == null)
            {
                return NotFound();
            }

            db.Parts.Remove(part);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Parts(5)/ParentPart
        [EnableQuery]
        public SingleResult<Part> GetParentPart([FromODataUri] int key)
        {
            return SingleResult.Create(db.Parts.Where(m => m.ID == key).Select(m => m.ParentPart));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PartExists(int key)
        {
            return db.Parts.Count(e => e.ID == key) > 0;
        }
    }
}
