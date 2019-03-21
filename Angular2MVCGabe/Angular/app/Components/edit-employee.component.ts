import { Component, Input } from "@angular/core";
import { StateParams } from '@uirouter/core';
import { Employee, EmployeeService } from '../Service/employee.service';
import { FormBuilder } from '@angular/forms';

@Component({
    templateUrl: '../Angular/app/Components/edit-employee.template.html'
})
export class EditEmployeeComponent {
    editable: boolean;
    employeeNameMaxLength: number;
    currentEmployee: Employee;
    @Input() stateParams:StateParams;

    constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
        this.editable = false;
        this.employeeNameMaxLength = 20;
    }

}