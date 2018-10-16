import { TestBed, inject } from '@angular/core/testing';

import { NgVideoPlayerService } from './ng-video-player.service';

describe('NgVideoPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgVideoPlayerService]
    });
  });

  it('should be created', inject([NgVideoPlayerService], (service: NgVideoPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
