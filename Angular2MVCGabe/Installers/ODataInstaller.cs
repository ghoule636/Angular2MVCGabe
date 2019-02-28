using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Microsoft.AspNet.OData;

namespace Angular2MVCGabe.Installers
{
    public class ODataInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                .BasedOn<ODataController>()
                .WithService.DefaultInterfaces()
                .LifestyleTransient());
        }
    }
}