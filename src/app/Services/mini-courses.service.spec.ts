import { TestBed } from '@angular/core/testing';

import { MiniCoursesService } from './mini-courses.service';

describe('MiniCoursesService', () => {
  let service: MiniCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
