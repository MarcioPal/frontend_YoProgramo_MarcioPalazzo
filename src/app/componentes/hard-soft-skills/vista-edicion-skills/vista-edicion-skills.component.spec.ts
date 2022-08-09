import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEdicionSkillsComponent } from './vista-edicion-skills.component';

describe('VistaEdicionSkillsComponent', () => {
  let component: VistaEdicionSkillsComponent;
  let fixture: ComponentFixture<VistaEdicionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEdicionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEdicionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
