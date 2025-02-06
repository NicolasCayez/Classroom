import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTeaserDetailComponent } from './lesson-teaser-detail.component';

describe('LessonTeaserDetailComponent', () => {
  let component: LessonTeaserDetailComponent;
  let fixture: ComponentFixture<LessonTeaserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTeaserDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTeaserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
