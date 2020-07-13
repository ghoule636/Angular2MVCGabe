"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const employee_service_1 = require("../../Services/employee.service");
let EmployeeTestComponent = class EmployeeTestComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    ngOnInit() {
        this.loadEmployees();
    }
    loadEmployees() {
        this.employeeService.getAllEmployees("?$expand=Address&$count=true").subscribe(result => {
            console.log(result);
            this.allEmployees = result.value;
        });
    }
    selectEmployee(selectedEmployee) {
        console.log(selectedEmployee);
    }
    ngOnDestroy() {
        // TODO
    }
};
EmployeeTestComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "../Angular/Admin/EmployeeTestApp/employee.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeTestComponent);
exports.EmployeeTestComponent = EmployeeTestComponent;
//# sourceMappingURL=employee.component.js.map