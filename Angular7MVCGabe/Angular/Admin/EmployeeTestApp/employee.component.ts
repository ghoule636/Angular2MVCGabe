import { Component, OnInit, OnDestroy } from "@angular/core";
import { EmployeeService } from '../../Services/employee.service';

@Component({
  templateUrl: "./employee.template.html"
})
export class EmployeeTestComponent implements OnInit, OnDestroy {

  constructor(private readonly employeeService: EmployeeService) {

  }

  ngOnInit() {
    // TODO
  }

  ngOnDestroy() {
    // TODO
  }

}
