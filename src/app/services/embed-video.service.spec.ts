import { TestBed } from '@angular/core/testing';

import { EmbedVideoService } from './embed-video.service';

describe('EmbedVideoService', () => {
  let service: EmbedVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbedVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
