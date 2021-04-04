import { TestBed } from '@angular/core/testing';

import { SoundResourcesServiceService } from './sound-resources-service.service';

describe('SoundResourcesServiceService', () => {
  let service: SoundResourcesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundResourcesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
