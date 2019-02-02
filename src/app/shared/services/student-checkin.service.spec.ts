import { TestBed } from '@angular/core/testing';

import { StudentCheckinService } from './student-checkin.service';

describe('StudentCheckinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentCheckinService = TestBed.get(StudentCheckinService);
    expect(service).toBeTruthy();
  });
});
