import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  states = ['First', 'Second', 'Third','Fourth'];
  stateHasError = false;
  userModel = new User('Jack','test@test.com','123','somewhere','auckland', 'First', true);

  constructor(private enrol:EnrollmentService) { }

  ngOnInit() {
  }

  
  validateState(value){
    if(value == 'default')
      this.stateHasError = true;
    else
      this.stateHasError = false;
  }

  onSubmit(){
    this.enrol.enroll(this.userModel)
    .subscribe(
      data => console.log(data),
      error=> console.log(error)
    );
  }
}
