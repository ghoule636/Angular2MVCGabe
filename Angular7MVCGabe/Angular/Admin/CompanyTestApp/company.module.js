"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const router_config_1 = require("./router.config");
const company_component_1 = require("./company.component");
const angular_1 = require("@uirouter/angular");
//import { EmployeeService } from '../../Services/employee.service'
let CompanyTestConfig = class CompanyTestConfig {
};
CompanyTestConfig = tslib_1.__decorate([
    core_1.Component({
        selector: "company-test-app",
        template: "<ui-view></ui-view>"
    })
], CompanyTestConfig);
exports.CompanyTestConfig = CompanyTestConfig;
const INITIAL_STATES = [router_config_1.mainState];
const INITIAL_COMPONENTS = [CompanyTestConfig, company_component_1.CompanyTestConponent];
let CompanyTestModule = class CompanyTestModule {
};
CompanyTestModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            ng_bootstrap_1.NgbModule,
            angular_1.UIRouterModule.forRoot({
                states: INITIAL_STATES,
                useHash: true
            })
        ],
        declarations: [INITIAL_COMPONENTS],
        providers: [
            //EmployeeService,
            ng_bootstrap_1.NgbPaginationConfig
        ],
        bootstrap: [CompanyTestConfig]
    })
], CompanyTestModule);
exports.CompanyTestModule = CompanyTestModule;
//# sourceMappingURL=company.module.js.map