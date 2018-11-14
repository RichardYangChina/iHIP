import { TestBed } from '@angular/core/testing';

import { RoleselectService } from './roleselect.service';

describe('RoleselectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleselectService = TestBed.get(RoleselectService);
    expect(service).toBeTruthy();
  });
});
