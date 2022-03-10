import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected') // Tähän voi määritellä toisen nimen eventemitterille
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() { // ngClass is not meant to replace css class
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
      
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'};
  }

}
