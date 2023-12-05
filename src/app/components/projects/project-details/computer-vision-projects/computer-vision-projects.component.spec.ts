import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVisionProjectsComponent } from './computer-vision-projects.component';

describe('ComputerVisionProjectsComponent', () => {
  let component: ComputerVisionProjectsComponent;
  let fixture: ComponentFixture<ComputerVisionProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerVisionProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerVisionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
