import { TestBed } from '@angular/core/testing';

import { AmazonServiceService } from './amazon-service.service';

describe('AmazonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmazonServiceService = TestBed.get(AmazonServiceService);
    expect(service).toBeTruthy();
  });
});
