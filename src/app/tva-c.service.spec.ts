import { TestBed } from '@angular/core/testing';

import { TvaCService } from './tva-c.service';

describe('TvaCService', () => {
  let service: TvaCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvaCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
