using Microsoft.AspNet.OData.Query;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular2MVC.Model.db
{
    [Table("Part")]
    [Count]
    [Page]
    [OrderBy]
    [Expand]
    public class Part
    {
        public int ID { get; set; }
        public string PartName { get; set; }
        public int ParentPartID { get; set; }

        [ForeignKey("ParentPartID")]
        public virtual Part ParentPart { get; set; }
    }
}
