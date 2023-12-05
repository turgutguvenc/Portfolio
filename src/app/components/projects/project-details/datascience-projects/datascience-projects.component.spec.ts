import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceProjectsComponent } from './datascience-projects.component';

describe('DatascienceProjectsComponent', () => {
  let component: DatascienceProjectsComponent;
  let fixture: ComponentFixture<DatascienceProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatascienceProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatascienceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
