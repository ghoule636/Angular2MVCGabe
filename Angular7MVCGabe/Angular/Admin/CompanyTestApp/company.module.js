import { __decorate } from "tslib";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule } from '@uirouter/angular';
//import { EmployeeService } from '../../Services/employee.service'
import { mainState } from './router.config';
import { CompanyTestConponent } from './company.component';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
var CompanyTestConfig = /** @class */ (function () {
    function CompanyTestConfig() {
    }
    CompanyTestConfig = __decorate([
        Component({
            selector: "company-test-app",
            template: "<ui-view></ui-view>"
        })
    ], CompanyTestConfig);
    return CompanyTestConfig;
}());
export { CompanyTestConfig };
var INITIAL_STATES = [mainState];
var INITAL_COMPONENTS = [CompanyTestConponent];
var CompanyTestModule = /** @class */ (function () {
    function CompanyTestModule() {
    }
    CompanyTestModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                HttpClientModule,
                NgbModule,
                UIRouterModule.forRoot({
                    states: INITIAL_STATES,
                    useHash: true
                })
            ],
            declarations: [INITAL_COMPONENTS],
            providers: [
                //EmployeeService,
                NgbPaginationConfig
            ],
            bootstrap: [CompanyTestConfig]
        })
    ], CompanyTestModule);
    return CompanyTestModule;
}());
export { CompanyTestModule };
//# sourceMappingURL=company.module.js.map