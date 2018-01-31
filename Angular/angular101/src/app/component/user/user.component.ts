import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  constructor() { }

  ngOnInit() {
    this.name = "My Name";
  }

}

interface Address{
 street:string,
 city:string,
 state:string
}
