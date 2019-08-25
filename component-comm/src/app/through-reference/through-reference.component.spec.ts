import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughReferenceComponent } from './through-reference.component';

describe('ThroughReferenceComponent', () => {
  let component: ThroughReferenceComponent;
  let fixture: ComponentFixture<ThroughReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
