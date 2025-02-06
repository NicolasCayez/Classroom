import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTeaserComponent } from './lesson-teaser.component';

describe('LessonTeaserComponent', () => {
  let component: LessonTeaserComponent;
  let fixture: ComponentFixture<LessonTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTeaserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
