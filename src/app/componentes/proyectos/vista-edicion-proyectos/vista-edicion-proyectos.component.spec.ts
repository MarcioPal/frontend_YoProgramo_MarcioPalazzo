import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionProyectosComponent } from './vista-edicion-proyectos.component';

describe('VistaEdicionProyectosComponent', () => {
  let component: VistaEdicionProyectosComponent;
  let fixture: ComponentFixture<VistaEdicionProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
