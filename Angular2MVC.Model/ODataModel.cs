using Angular2MVC.Model.db;
using Microsoft.AspNet.OData.Builder;
using Microsoft.OData.Edm;

namespace Angular2MVC.Model
{
    public class ODataModel
    {
        public static IEdmModel GetEdmModel()
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Employee>("Employees");
            builder.EntitySet<Address>("Addresses");
            builder.EntitySet<Company>("Companies");
            builder.EntitySet<Part>("Parts");

            return builder.GetEdmModel();
        }
    }
}
