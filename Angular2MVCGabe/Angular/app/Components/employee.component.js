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
var employee_service_1 = require("../Service/employee.service");
var forms_1 = require("@angular/forms");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(formBuilder, employeeService) {
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.indicateLoading = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formBuilder.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            Surname: [''],
            Email: ['']
        });
        this.getEmployees();
    };
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.indicateLoading = true;
        this.employeeService.getAllEmployees().subscribe(function (response) {
            _this.employees = response.values;
            _this.indicateLoading = false;
        });
    };
    EmployeeComponent.prototype.addEmployee = function () {
        console.log("Add Employee!");
    };
    EmployeeComponent.prototype.SetControlsSate = function (isEnable) {
        isEnable ? this.employeeForm.enable() : this.employeeForm.disable();
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            templateUrl: 'Angular/app/Components/employee.template.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map