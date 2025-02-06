import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LessonTeaserComponent } from "../lesson-teaser/lesson-teaser.component";

@Component({
  selector: 'app-lesson-teaser-group',
  imports: [NgFor, LessonTeaserComponent],
  templateUrl: './lesson-teaser-group.component.html',
  styleUrl: './lesson-teaser-group.component.css'
})
export class LessonTeaserGroupComponent {

}
