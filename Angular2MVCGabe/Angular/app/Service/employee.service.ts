import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

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

  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this._http.get<any>(`${this.Url}`);
  }

  getEmployee(id: number): Observable<any> {
    return this._http.get<any>(`${this.Url}(${id})?$count=true`)
    //TODO: tried to get some error handling but it's not going perfectly so I'll return here later.
    // .catch((err: HttpErrorResponse) => { 
    //   console.error('An error occured: ', err.error);

    //   return Observable.of([
    //     {name: "Default values returned by local error handling", id: 97},
    //     {name: "Default values returned by local error handling(2)", id: 98},
    //     {name: "Default values returned by local error handling(3)", id: 99}
    //   ]);
    // });
  }


  // post(url: string, model: any): Observable<any> {
  //   let body = JSON.stringify(model);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this._http.post(url, body, options)
  //     .map((response: Response) => <any>response.json())
  //     .catch(this.handleError);
  // }

  // put(url: string, id: number, model: any): Observable<any> {
  //   let body = JSON.stringify(model);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this._http.put(url+id, body, options)
  //     .map((response: Response) => <any>response.json())
  //     .catch(this.handleError);
  // }

  // delete(url: string, id: number): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this._http.delete(url+id,options)
  //     .map((response: Response) => <any>response.json())
  //     .catch(this.handleError);
  // }

}