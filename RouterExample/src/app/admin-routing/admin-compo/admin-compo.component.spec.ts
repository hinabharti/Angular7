import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompoComponent } from './admin-compo.component';

describe('AdminCompoComponent', () => {
  let component: AdminCompoComponent;
  let fixture: ComponentFixture<AdminCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
