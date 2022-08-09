import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionEducacionComponent } from './vista-edicion-educacion.component';

describe('VistaEdicionEducacionComponent', () => {
  let component: VistaEdicionEducacionComponent;
  let fixture: ComponentFixture<VistaEdicionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
