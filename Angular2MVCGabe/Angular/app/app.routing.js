"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_component_1 = require("./Components/employee.component");
var edit_employee_component_1 = require("./Components/edit-employee.component");
var core_1 = require("@uirouter/core");
exports.mainState = { name: 'main', url: '', component: employee_component_1.EmployeeComponent };
exports.detailState = {
    name: 'main.employee',
    url: '/:employeeID',
    component: edit_employee_component_1.EditEmployeeComponent,
    resolve: [
        {
            token: 'stateParams',
            deps: [core_1.Transition],
            resolveFn: function (trans) { return trans.params(); }
        }
    ]
};
//# sourceMappingURL=app.routing.js.map