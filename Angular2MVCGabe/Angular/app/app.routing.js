"use strict";
var router_1 = require("@angular/router");
var employee_component_1 = require("./Components/employee.component");
var appRoutes = [
    { path: 'Admin', redirectTo: 'Admin/Employee', pathMatch: 'full' },
    { path: 'Admin/Employee', component: employee_component_1.EmployeeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// export const mainState = {name: 'main', url: '', component: EmployeeComponent} 
//# sourceMappingURL=app.routing.js.map