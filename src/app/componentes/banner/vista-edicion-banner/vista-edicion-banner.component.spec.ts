import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionBannerComponent } from './vista-edicion-banner.component';

describe('VistaEdicionBannerComponent', () => {
  let component: VistaEdicionBannerComponent;
  let fixture: ComponentFixture<VistaEdicionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
