import { TestBed } from '@angular/core/testing';

import { ObservableSeviceService } from './observable-sevice.service';

describe('ObservableSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableSeviceService = TestBed.get(ObservableSeviceService);
    expect(service).toBeTruthy();
  });
});
