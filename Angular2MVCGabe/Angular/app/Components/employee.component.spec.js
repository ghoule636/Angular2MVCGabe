"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var employee_component_1 = require("./employee.component");
var testing_3 = require("@angular/common/http/testing");
describe('EmployeeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [employee_component_1.EmployeeComponent],
            imports: [testing_2.RouterTestingModule.withRoutes([]), testing_3.HttpClientTestingModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(employee_component_1.EmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=employee.component.spec.js.map