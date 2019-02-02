import { TestBed } from '@angular/core/testing';

import { LecturerCheckinService } from './lecturer-checkin.service';

describe('LecturerCheckinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturerCheckinService = TestBed.get(LecturerCheckinService);
    expect(service).toBeTruthy();
  });
});
