import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  isButtonClicked:boolean = false;

  changeFrame()
  {
    this.isButtonClicked = !this.isButtonClicked;
  }
}
