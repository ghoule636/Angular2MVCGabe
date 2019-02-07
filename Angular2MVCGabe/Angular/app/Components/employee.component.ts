import { Component, OnInit } from '@angular/core'
import { EmployeeService, Employee } from '../Service/employee.service';

@Component({
    templateUrl: 'app/Components/employee.template.html'
})

export class EmployeeComponent implements OnInit {

    employees: Employee[];

    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeeService.getAllEmployees().subscribe( response => {
            this.employees = response.values;
        });
    }
}