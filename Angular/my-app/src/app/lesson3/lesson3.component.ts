import { Component, OnInit } from '@angular/core';
import { RecordsService } from './records.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { IRecord } from './record';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {

  records = [];
  errorMsg = "";
  public departmentId:number;

  constructor(private _recordService: RecordsService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._recordService.getRecords().subscribe(
      data => this.records = data,
      error => this.errorMsg = error.message,
      //error => console.log(error.message),
    );


    this.route.paramMap.subscribe((params: ParamMap) =>
      this.departmentId = parseInt(params.get('id'))
    );

    console.log("departmentId: " + this.departmentId);
  }

  onSelect(record) {
    //this._router.navigate(['/lesson3', record.id]);
    this._router.navigate([record.id], {relativeTo:this.route});
  }


  isSelected(record){
    return this.departmentId == record.id;
  }
}
