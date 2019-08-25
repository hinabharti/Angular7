import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStepCompComponent } from './third-step-comp.component';

describe('ThirdStepCompComponent', () => {
  let component: ThirdStepCompComponent;
  let fixture: ComponentFixture<ThirdStepCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdStepCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdStepCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
