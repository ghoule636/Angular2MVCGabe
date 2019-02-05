using Angular2MVC.Model.db;
using Microsoft.AspNet.OData;
using Microsoft.Data.Edm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData.Builder;

namespace Angular2MVC.Model
{
    public class ODataModel
    {
        public static IEdmModel GetEdmModel()
        {
            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Employee>("Employees");
            builder.EntitySet<Address>("Addresses");
            builder.EntitySet<Company>("Companies");

            return builder.GetEdmModel();
        }
    }
}
