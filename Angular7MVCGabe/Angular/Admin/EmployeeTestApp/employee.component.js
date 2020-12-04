"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTestComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const employee_service_1 = require("../../Services/employee.service");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const angular_1 = require("@uirouter/angular");
let EmployeeTestComponent = class EmployeeTestComponent {
    constructor(employeeService, ngbConfig, stateService) {
        this.employeeService = employeeService;
        this.ngbConfig = ngbConfig;
        this.stateService = stateService;
        this.pageSize = 12;
        this.currentPage = 1;
        this.totalItems = 0;
        ngbConfig.maxSize = 3;
        ngbConfig.rotate = true;
        ngbConfig.pageSize = this.pageSize;
        ngbConfig.ellipses = false;
        ngbConfig.boundaryLinks = true;
    }
    ngOnInit() {
        this.loadEmployees();
    }
    loadEmployees() {
        this.employeeService.getAllEmployees(`?$count=true&$orderby=FirstName&$top=${this.pageSize}`).subscribe(result => {
            this.allEmployees = result.value;
            this.totalItems = result['@odata.count'];
        });
    }
    selectEmployee(selectedEmployee) {
        this.currentEmployee = selectedEmployee;
        this.employeeService.setCurrentEmployee(selectedEmployee);
        this.stateService.go("main.employee", {
            employeeID: selectedEmployee.ID
        });
    }
    pageChanged(page) {
        this.currentPage = page;
        this.employeeService.getAllEmployees(`?$orderby=FirstName&$top=${this.pageSize}&$skip=${(this.currentPage - 1) * this.pageSize}`).subscribe(result => {
            this.allEmployees = result.value;
        });
    }
    ngOnDestroy() {
        // TODO
    }
};
EmployeeTestComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "../Angular/Admin/EmployeeTestApp/employee.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [employee_service_1.EmployeeService,
        ng_bootstrap_1.NgbPaginationConfig,
        angular_1.StateService])
], EmployeeTestComponent);
exports.EmployeeTestComponent = EmployeeTestComponent;
//# sourceMappingURL=employee.component.js.map