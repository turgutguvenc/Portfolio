import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputervisionComponent } from './computervision.component';

describe('ComputervisionComponent', () => {
  let component: ComputervisionComponent;
  let fixture: ComponentFixture<ComputervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputervisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
