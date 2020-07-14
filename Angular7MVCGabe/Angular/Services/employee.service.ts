import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Employee {
  ID: number;
  FirstName: string;
  Surname: string;
  Email: string;
  AddressID: number;
  CompanyID: number;
}

@Injectable()
export class EmployeeService {
  private readonly Url = "/odata/Employees"
  private readonly currentEmployee = new Subject<Employee>();
  employeeLoaded$ = this.currentEmployee.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  setCurrentEmployee(employee: Employee): void {
    this.currentEmployee.next(employee);
  }

  getAllEmployees(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this.Url}${queryParams}`);
  }

  getEmployee(employeeID: number): Observable<any> {
    return this.http.get<any>(`${this.Url}(${employeeID})`);
  }
}
