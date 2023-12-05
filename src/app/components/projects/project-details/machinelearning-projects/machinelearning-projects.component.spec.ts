import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinelearningProjectsComponent } from './machinelearning-projects.component';

describe('MachinelearningProjectsComponent', () => {
  let component: MachinelearningProjectsComponent;
  let fixture: ComponentFixture<MachinelearningProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinelearningProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinelearningProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
