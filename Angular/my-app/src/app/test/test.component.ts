import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //template: `<input type="text" bind-disabled="disabledd" value="dadf">`,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public disabledd = true;
  public thisClassName = "test-color1";
  public blueOrNot = true;
  public isRed = false;
  public theClasses4 = {"test-size":true,"test-color4":true};
  public theClasses5 = {"test-size":true,"test-color5":true};
  public theOrangeColor = "orange";
  public theStyles = {
    fontStyle:"italic",
    fontSize: '50px'
  }

  public message = "";

  valueToChild = "Value To Child";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.message = "yoyoyo";
    console.log('asdfasd');
  }

  onClickEvent(e){
    console.log(e.type);
  }


  log(value){
    console.log(value);
  }

  msgReceiver(value:string){
    this.message = value;
  }

}
