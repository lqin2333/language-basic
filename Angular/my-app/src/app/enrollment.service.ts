import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  apiUrl = '';
  constructor(private _http:HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this.apiUrl, user);
  }
}
