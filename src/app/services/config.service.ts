import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  

  constructor(private myHttp :HttpClient) { }

  getCourseList(){
   return this.myHttp.get('assets/mock-data/course-list.json') 
  }
}
