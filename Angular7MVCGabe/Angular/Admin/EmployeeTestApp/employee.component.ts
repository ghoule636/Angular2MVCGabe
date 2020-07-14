import { Component, OnInit, OnDestroy } from "@angular/core";
import { EmployeeService, Employee } from '../../Services/employee.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '@uirouter/angular';

@Component({
  templateUrl: "../Angular/Admin/EmployeeTestApp/employee.template.html"
})
export class EmployeeTestComponent implements OnInit, OnDestroy {

  allEmployees: Employee[];
  pageSize = 12;
  totalItems: number;
  currentPage: number;
  currentEmployee: Employee;

  constructor(private readonly employeeService: EmployeeService,
              private readonly ngbConfig: NgbPaginationConfig,
              private readonly stateService: StateService) {
    this.currentPage = 1;
    this.totalItems = 0;
    ngbConfig.maxSize = 3;
    ngbConfig.rotate = true;
    ngbConfig.pageSize = this.pageSize;
    ngbConfig.ellipses = false;
    ngbConfig.boundaryLinks = true;
  }

  ngOnInit() {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.employeeService.getAllEmployees(`?$count=true&$orderby=FirstName&$top=${this.pageSize}`).subscribe(result => {
      this.allEmployees = result.value;
      this.totalItems = result['@odata.count'];
    });
  }

  selectEmployee(selectedEmployee: any): void {
    this.currentEmployee = selectedEmployee;
    this.employeeService.setCurrentEmployee(selectedEmployee);
    this.stateService.go("main.employee", {
      employeeID: selectedEmployee.ID
    })
  }

  pageChanged(page: number): void {
    this.currentPage = page;
    this.employeeService.getAllEmployees(`?$orderby=FirstName&$top=${this.pageSize}&$skip=${
      (this.currentPage -1) * this.pageSize}`).subscribe(result => {
      this.allEmployees = result.value;
    });
  }

  ngOnDestroy() {
    // TODO
  }

}
