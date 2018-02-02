import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  //dataService could be anything
  constructor(private dataService:DataService) {
    console.log('data servicer connected 2');
   }

  ngOnInit() {
    this.name = "My Name";
    this.age = 18;
    this.hobbies = ['hobby1', 'hobby2', 'hobby3'];
    this.address = {
      street:'the road',
      city:'auckland',
      state:'NZ'
    };
    this.dataService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    });
  }

  onClick(){
  	this.name = 'wtf';
  }

  addHobby(value){
    this.hobbies.unshift(value); // or push
  }

  deleteHobby(value){
    for(let i = 0; i < this.hobbies.length; i++)
    {
        if(this.hobbies[i] == value)
        {
          this.hobbies.splice(i, 1);
        }
    }
    
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
    
  }

}

interface Address{
 street:string,
 city:string,
 state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId:number
}
