import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionExperienciaComponent } from './vista-edicion-experiencia.component';

describe('VistaEdicionExperienciaComponent', () => {
  let component: VistaEdicionExperienciaComponent;
  let fixture: ComponentFixture<VistaEdicionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
