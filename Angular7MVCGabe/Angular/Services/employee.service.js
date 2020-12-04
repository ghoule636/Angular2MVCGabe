"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.Url = "/odata/Employees";
        this.currentEmployee = new rxjs_1.Subject();
        this.employeeLoaded$ = this.currentEmployee.asObservable();
    }
    setCurrentEmployee(employee) {
        this.currentEmployee.next(employee);
    }
    getAllEmployees(queryParams) {
        return this.http.get(`${this.Url}${queryParams}`);
    }
    getEmployee(employeeID) {
        return this.http.get(`${this.Url}(${employeeID})`);
    }
};
EmployeeService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map