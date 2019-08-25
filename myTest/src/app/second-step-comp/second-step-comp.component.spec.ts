import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepCompComponent } from './second-step-comp.component';

describe('SecondStepCompComponent', () => {
  let component: SecondStepCompComponent;
  let fixture: ComponentFixture<SecondStepCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStepCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
