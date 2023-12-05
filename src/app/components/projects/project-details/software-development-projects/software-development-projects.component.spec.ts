import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentProjectsComponent } from './software-development-projects.component';

describe('SoftwareDevelopmentProjectsComponent', () => {
  let component: SoftwareDevelopmentProjectsComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
