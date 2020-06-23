import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { EmployeeService } from '../../Services/employee.service';
var EmployeeTestComponent = /** @class */ (function () {
    function EmployeeTestComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeTestComponent.prototype.ngOnInit = function () {
        // TODO
    };
    EmployeeTestComponent.prototype.ngOnDestroy = function () {
        // TODO
    };
    EmployeeTestComponent = __decorate([
        Component({
            templateUrl: "./employee.template.html"
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeeTestComponent);
    return EmployeeTestComponent;
}());
export { EmployeeTestComponent };
//# sourceMappingURL=employee.component.js.map