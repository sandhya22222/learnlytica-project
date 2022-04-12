import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-courses-library',
  templateUrl: './courses-library.component.html',
  styleUrls: ['./courses-library.component.css']
})
export class CoursesLibraryComponent implements OnInit {
 
  @Input () imgid:any
  @Input() configs:any
 imgUrl:any

  courseTitle='Devops';
  
  constructor(private myConfig:ConfigService) { }

  ngOnInit(): void {
    this.imgUrl=`https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`
  }

}
