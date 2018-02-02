import { Injectable } from '@angular/core';

//added by me
import { Http } from '@angular/http';
// react extention. Map here
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('data servicer connected 1');
  }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

}
