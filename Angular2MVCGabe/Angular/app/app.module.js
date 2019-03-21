"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_1 = require("@uirouter/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var employee_service_1 = require("./Service/employee.service");
var employee_component_1 = require("./Components/employee.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var edit_employee_component_1 = require("./Components/edit-employee.component");
var INITIAL_COMPONENTS = [app_component_1.AppComponent, employee_component_1.EmployeeComponent, edit_employee_component_1.EditEmployeeComponent];
var INITIAL_STATES = [app_routing_1.mainState, app_routing_1.detailState];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbPaginationModule,
                angular_1.UIRouterModule.forRoot({
                    states: INITIAL_STATES,
                    useHash: true
                })
            ],
            declarations: [INITIAL_COMPONENTS],
            providers: [employee_service_1.EmployeeService, ng_bootstrap_1.NgbPaginationConfig],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map