import { Component, OnInit, OnDestroy } from '@angular/core';
//import { EmployeeService } from '../../Services/employee.service';

@Component({
  templateUrl: "./company.template.html"
})
export class CompanyTestConponent implements OnInit, OnDestroy {

  //constructor(private readonly employeeService: EmployeeService) {
    constructor() {

  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
