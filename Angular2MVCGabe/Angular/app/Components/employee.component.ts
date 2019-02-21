import { Component, OnInit } from '@angular/core'
import { EmployeeService, Employee } from '../Service/employee.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    templateUrl: 'Angular/app/Components/employee.template.html'
})

export class EmployeeComponent implements OnInit {

    indicateLoading: boolean = false;
    employees: Employee[];
    employeeForm: FormGroup

    constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeForm = this.formBuilder.group({
            Id: [''],
            FirstName: ['', Validators.required],
            Surname: [''],
            Email: ['']
        })
        this.getEmployees();
    }

    getEmployees(): void {
        this.indicateLoading = true;
        this.employeeService.getAllEmployees().subscribe( response => {
            this.employees = response.values;
            this.indicateLoading = false;
        });
    }

    addEmployee(): void {
        console.log("Add Employee!")
    }

    SetControlsSate(isEnable: boolean) {
        isEnable ? this.employeeForm.enable() : this.employeeForm.disable();
    }
}