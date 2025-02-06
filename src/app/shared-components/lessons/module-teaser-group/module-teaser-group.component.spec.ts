import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTeaserGroupComponent } from './module-teaser-group.component';

describe('ModuleTeaserGroupComponent', () => {
  let component: ModuleTeaserGroupComponent;
  let fixture: ComponentFixture<ModuleTeaserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleTeaserGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTeaserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
