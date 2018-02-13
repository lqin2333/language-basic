import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';





@Component({
  selector: 'child-area',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit{
  @Input() private msgFromParent:string;
  @Output() private msgToParent = new EventEmitter<string>();
  constructor(){
  }
  
  ngOnInit(){
    
  }



}
