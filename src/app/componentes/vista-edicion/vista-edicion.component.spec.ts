import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionComponent } from './vista-edicion.component';

describe('VistaEdicionComponent', () => {
  let component: VistaEdicionComponent;
  let fixture: ComponentFixture<VistaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
