import { TestBed } from '@angular/core/testing';

import { PhotoshootService} from './photoshoot.service';

describe('PhotoshootServiceService', () => {
  let service: PhotoshootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoshootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
