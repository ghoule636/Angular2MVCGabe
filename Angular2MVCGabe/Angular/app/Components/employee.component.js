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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("@uirouter/core");
var EmployeeComponent = (function () {
    function EmployeeComponent(formBuilder, employeeService, ngbConfig, stateService) {
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.ngbConfig = ngbConfig;
        this.stateService = stateService;
        //set to true to display loading animation
        this.indicateLoading = false;
        // settings for the pagination
        this.currentPage = 1;
        ngbConfig.pageSize = 12;
        ngbConfig.size = 'sm';
        ngbConfig.boundaryLinks = true;
        ngbConfig.rotate = true;
        ngbConfig.maxSize = 3;
        ngbConfig.ellipses = false;
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
        this.employeeService.getAllEmployees("?$orderby=FirstName&$top=" + this.ngbConfig.pageSize + "&$count=true").subscribe(function (response) {
            _this.employees = response.value;
            _this.totalItems = response['@odata.count'];
            _this.indicateLoading = false;
        });
    };
    EmployeeComponent.prototype.addEmployee = function () {
        console.log("Add Employee!");
    };
    EmployeeComponent.prototype.selectEmployee = function (selectedEmployee) {
        this.employeeService.setCurrentEmployee(selectedEmployee);
        this.stateService.go('main.employee', { employeeID: selectedEmployee.ID });
    };
    EmployeeComponent.prototype.pageChanged = function (page) {
        var _this = this;
        this.currentPage = page;
        //This string is the odata query values it is used to skip the correct amount of 
        //employees to ensure we load the correct pagination values.
        var queryString = "?$orderby=FirstName&$top=" + this.ngbConfig.pageSize + "&$skip=";
        queryString += "" + (this.currentPage - 1) * this.ngbConfig.pageSize;
        this.employeeService.getAllEmployees(queryString).subscribe(function (response) {
            _this.employees = response.value;
        });
    };
    EmployeeComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.employeeForm.enable() : this.employeeForm.disable();
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            templateUrl: '../Angular/app/Components/employee.template.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            employee_service_1.EmployeeService,
            ng_bootstrap_1.NgbPaginationConfig,
            core_2.StateService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map