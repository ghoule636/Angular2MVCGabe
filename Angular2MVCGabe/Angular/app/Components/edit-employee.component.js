"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@uirouter/core");
var employee_service_1 = require("../Service/employee.service");
var forms_1 = require("@angular/forms");
var EditEmployeeComponent = (function () {
    function EditEmployeeComponent(employeeService, fb) {
        this.employeeService = employeeService;
        this.fb = fb;
        this.editable = false;
        this.employeeNameMaxLength = 20;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_2.StateParams)
    ], EditEmployeeComponent.prototype, "stateParams", void 0);
    EditEmployeeComponent = __decorate([
        core_1.Component({
            templateUrl: '../Angular/app/Components/edit-employee.template.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, forms_1.FormBuilder])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=edit-employee.component.js.map