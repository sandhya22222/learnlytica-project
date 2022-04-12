import { Component, Input, OnInit } from '@angular/core';
 import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  myCourseList:any
  constructor(private mconfig:ConfigService) { }

  ngOnInit(): void {
   this.mconfig.getCourseList().subscribe(
     (sdata: any)=>{
       this.myCourseList=sdata
     }
   );
  }

}
