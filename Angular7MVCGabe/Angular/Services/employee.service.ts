import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private readonly Url = "/odata/Employee"

  constructor(private readonly http: HttpClient) {
  }

  getAllEmployees(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this.Url}${queryParams}`);
  }
}
