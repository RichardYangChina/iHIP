import { TestBed } from '@angular/core/testing';

import { ExceptionslistService } from './exceptionslist.service';

describe('ExceptionslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceptionslistService = TestBed.get(ExceptionslistService);
    expect(service).toBeTruthy();
  });
});
