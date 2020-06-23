import { __decorate } from "tslib";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { mainState } from './router.config';
import { EmployeeTestComponent } from './employee.component';
import { UIRouterModule } from '@uirouter/angular';
import { EmployeeService } from '../../Services/employee.service';
var EmployeeTestConfig = /** @class */ (function () {
    function EmployeeTestConfig() {
    }
    EmployeeTestConfig = __decorate([
        Component({
            selector: "employee-test-app",
            template: "<ui-view></ui-view>"
        })
    ], EmployeeTestConfig);
    return EmployeeTestConfig;
}());
export { EmployeeTestConfig };
var INITIAL_STATES = [mainState];
var INTIAL_COMPONENTS = [EmployeeTestComponent];
var EmployeeTestModule = /** @class */ (function () {
    function EmployeeTestModule() {
    }
    EmployeeTestModule = __decorate([
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
            declarations: [INTIAL_COMPONENTS],
            providers: [
                EmployeeService,
                NgbPaginationConfig
            ],
            bootstrap: [EmployeeTestConfig]
        })
    ], EmployeeTestModule);
    return EmployeeTestModule;
}());
export { EmployeeTestModule };
//# sourceMappingURL=employee.module.js.map