import { Component, OnInit } from '@angular/core';

import {LoggerService} from './logger.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title:string = 'Angular 2';
  private msgToChild:string;

  private showThisArea:boolean = false;
  
  constructor(private logger: LoggerService){
  }
  
  ngOnInit(){
    this.msgToChild = "This is from parent";
    this.logger.debug('Msg from service');
  }

  changeShow(){
    this.showThisArea = !this.showThisArea;
    
  }


}
