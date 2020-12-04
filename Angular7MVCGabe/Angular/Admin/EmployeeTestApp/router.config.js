"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editEmployeeState = exports.mainState = void 0;
const employee_component_1 = require("./employee.component");
const edit_employee_component_1 = require("./edit-employee.component");
const angular_1 = require("@uirouter/angular");
exports.mainState = {
    name: "main",
    url: "",
    component: employee_component_1.EmployeeTestComponent
};
exports.editEmployeeState = {
    name: "main.employee",
    url: "/edit/:employeeID",
    params: {
        employeeID: {
            type: "int",
            dynamic: true
        }
    },
    component: edit_employee_component_1.EditEmployeeComponent,
    resolve: [
        {
            token: "stateParams",
            dynamic: true,
            deps: [angular_1.Transition],
            resolveFn: (trans) => trans.params()
        }
        // TODO add permission/capability here
    ]
};
//# sourceMappingURL=router.config.js.map