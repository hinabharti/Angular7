import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepCompComponent } from './first-step-comp.component';

describe('FirstStepCompComponent', () => {
  let component: FirstStepCompComponent;
  let fixture: ComponentFixture<FirstStepCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
