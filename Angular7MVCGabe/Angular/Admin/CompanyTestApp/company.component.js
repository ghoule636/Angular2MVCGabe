"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
//import { EmployeeService } from '../../Services/employee.service';
let CompanyTestConponent = class CompanyTestConponent {
    //constructor(private readonly employeeService: EmployeeService) {
    constructor() {
    }
    ngOnDestroy() {
        throw new Error("Method not implemented.");
    }
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
};
CompanyTestConponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "./company.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CompanyTestConponent);
exports.CompanyTestConponent = CompanyTestConponent;
//# sourceMappingURL=company.component.js.map