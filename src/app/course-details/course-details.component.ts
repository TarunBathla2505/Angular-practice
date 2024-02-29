import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  cources: any;
  displayedColumns = ['code','name','fee','duration'];
  constructor(private cservice: CourseService) {
    this.cources = cservice.getCources();
    console.log(this.cources);
  }
}
