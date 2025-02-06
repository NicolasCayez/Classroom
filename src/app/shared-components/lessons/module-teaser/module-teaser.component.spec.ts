import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTeaserComponent } from './module-teaser.component';

describe('ModuleTeaserComponent', () => {
  let component: ModuleTeaserComponent;
  let fixture: ComponentFixture<ModuleTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleTeaserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
