import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Part {
  ID: number;
  PartName: string;
  ParentPartID: number;
}

@Injectable()
export class PartService {
  private readonly Url = "/odata/Parts"
  private readonly currentPart = new Subject<Part>();
  partLoaded$ = this.currentPart.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  setCurrentPart(part: Part): void {
    this.currentPart.next(part);
  }

  getAllParts(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this.Url}${queryParams}`);
  }

  getPart(partID: number): Observable<any> {
    return this.http.get<any>(`${this.Url}(${partID})`);
  }
}
