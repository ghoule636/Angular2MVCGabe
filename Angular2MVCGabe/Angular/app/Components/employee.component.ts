import { Component, OnInit } from '@angular/core'

@Component({
    templateUrl: 'app/Components/employee.template.html'
})

export class EmployeeComponent implements OnInit {

    ngOnInit(): void {
        this.getEmployees();
    }
}