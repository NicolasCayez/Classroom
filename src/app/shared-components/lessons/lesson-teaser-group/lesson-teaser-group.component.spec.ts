import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTeaserGroupComponent } from './lesson-teaser-group.component';

describe('LessonTeaserGroupComponent', () => {
  let component: LessonTeaserGroupComponent;
  let fixture: ComponentFixture<LessonTeaserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTeaserGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTeaserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
