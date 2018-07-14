import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRecord } from './record';
import { Observable } from 'rxjs';




@Injectable()
export class RecordsService {

  private apiUrl:string = "https://5adf0cdebf932f0014d11b77.mockapi.io/api/v1/records";
  constructor(private http:HttpClient) { }
  

  getRecords():Observable<IRecord[]>{
    return this.http.get<IRecord[]>(this.apiUrl)
  }

  errorHandler(error: HttpErrorResponse){ //给订阅了Observable的扔
    return Observable.throw(error.message || "Server Error");
  }
}
