import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  ID: number;
  Name: string;
}

@Injectable()
export class CompanyService {
  private readonly Url = "/odata/Companies"

  constructor(private readonly http: HttpClient) {
  }

  getAllCompanies(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this.Url}${queryParams}`);
  }

  getCompany(companyID: number): Observable<any> {
    return this.http.get<any>(`${this.Url}(${companyID})`);
  }
}
