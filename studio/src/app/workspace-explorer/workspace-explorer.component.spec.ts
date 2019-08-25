import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceExplorerComponent } from './workspace-explorer.component';

describe('WorkspaceExplorerComponent', () => {
  let component: WorkspaceExplorerComponent;
  let fixture: ComponentFixture<WorkspaceExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
