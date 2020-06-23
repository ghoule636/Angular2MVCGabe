import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.Url = "/odata/Employee";
    }
    EmployeeService.prototype.getAllEmployees = function (queryParams) {
        return this.http.get("" + this.Url + queryParams);
    };
    EmployeeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map