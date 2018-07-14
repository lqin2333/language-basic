import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public departmentId;

  ngOnInit() {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) =>
      this.departmentId = parseInt(params.get('id')));
  }

  goPrevious(){
    this.router.navigate(['../',this.departmentId - 1],{relativeTo:this.route});
  }

  goNext(){
    //this.router.navigate(['/lesson3', this.departmentId + 1]);
    this.router.navigate(['../',this.departmentId + 1],{relativeTo:this.route});
  }

  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/lesson3',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

}
