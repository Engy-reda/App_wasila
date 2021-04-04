import { TestBed } from '@angular/core/testing';

import { VideoResourcesServiceService } from './video-resources-service.service';

describe('VideoResourcesServiceService', () => {
  let service: VideoResourcesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoResourcesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
