import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionAcercaDeComponent } from './vista-edicion-acerca-de.component';

describe('VistaEdicionAcercaDeComponent', () => {
  let component: VistaEdicionAcercaDeComponent;
  let fixture: ComponentFixture<VistaEdicionAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionAcercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
