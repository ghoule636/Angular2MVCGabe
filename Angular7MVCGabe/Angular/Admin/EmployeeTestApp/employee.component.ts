import { Component, OnInit, OnDestroy } from "@angular/core";
import { EmployeeService, Employee } from '../../Services/employee.service';

@Component({
  templateUrl: "../Angular/Admin/EmployeeTestApp/employee.template.html"
})
export class EmployeeTestComponent implements OnInit, OnDestroy {

  allEmployees: Employee[];

  constructor(private readonly employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.employeeService.getAllEmployees("").subscribe(result => {
      console.log(result);
      this.allEmployees = result.value;
    });
  }

  selectEmployee(selectedEmployee: any): void {
    console.log(selectedEmployee);
  }

  ngOnDestroy() {
    // TODO
  }

}
