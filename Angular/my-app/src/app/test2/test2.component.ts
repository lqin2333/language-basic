import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  abc = "abcccc";
  whichRef = false;
  swichCase = "three";
  listValues = ['cat','dog','bird'];

  messageToTest1 = "";

  @Input('valueReceived') anotherNameOfValueReceived ;

  @Output() outputValueToTest = new EventEmitter();
  
  fireEvent(msg){
    console.log("emited -- in test2");
    this.outputValueToTest.emit(msg);
  }



  constructor() { }

  ngOnInit() {
  }

}
