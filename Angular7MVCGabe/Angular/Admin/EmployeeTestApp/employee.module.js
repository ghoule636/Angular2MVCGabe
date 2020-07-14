"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const router_config_1 = require("./router.config");
const employee_component_1 = require("./employee.component");
const angular_1 = require("@uirouter/angular");
const employee_service_1 = require("../../Services/employee.service");
const edit_employee_component_1 = require("./edit-employee.component");
const forms_1 = require("@angular/forms");
let EmployeeTestConfig = class EmployeeTestConfig {
};
EmployeeTestConfig = tslib_1.__decorate([
    core_1.Component({
        selector: "employee-test-app",
        template: "<ui-view></ui-view>"
    })
], EmployeeTestConfig);
exports.EmployeeTestConfig = EmployeeTestConfig;
const INITIAL_STATES = [router_config_1.mainState, router_config_1.editEmployeeState];
const INTIAL_COMPONENTS = [EmployeeTestConfig, employee_component_1.EmployeeTestComponent, edit_employee_component_1.EditEmployeeComponent];
let EmployeeTestModule = class EmployeeTestModule {
};
EmployeeTestModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            ng_bootstrap_1.NgbModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            angular_1.UIRouterModule.forRoot({
                states: INITIAL_STATES,
                useHash: true
            })
        ],
        declarations: [INTIAL_COMPONENTS],
        providers: [
            employee_service_1.EmployeeService,
            ng_bootstrap_1.NgbPaginationConfig
        ],
        bootstrap: [EmployeeTestConfig]
    })
], EmployeeTestModule);
exports.EmployeeTestModule = EmployeeTestModule;
//# sourceMappingURL=employee.module.js.map