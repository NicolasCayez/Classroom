import { Component } from '@angular/core';
import { LessonTeaserGroupComponent } from '../../shared-components/lessons/lesson-teaser-group/lesson-teaser-group.component';

@Component({
  selector: 'app-home',
  imports: [LessonTeaserGroupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
