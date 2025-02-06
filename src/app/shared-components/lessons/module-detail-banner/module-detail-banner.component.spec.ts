import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDetailBannerComponent } from './module-detail-banner.component';

describe('ModuleDetailBannerComponent', () => {
  let component: ModuleDetailBannerComponent;
  let fixture: ComponentFixture<ModuleDetailBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleDetailBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleDetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
