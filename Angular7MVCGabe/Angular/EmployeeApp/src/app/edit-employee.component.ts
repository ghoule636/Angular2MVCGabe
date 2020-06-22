import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { Employee, EmployeeService } from 'Angular/Services/employee.service';

@Component({
    templateUrl: '../Angular/app/Components/modal-delete-employee.html'
})
export class ModalDeleteEmployee implements OnInit {
    @Input() employee: Employee;
    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() {
        console.log(this.employee)
    }
}

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
