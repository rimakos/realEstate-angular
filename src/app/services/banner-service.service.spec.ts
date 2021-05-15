import { TestBed } from '@angular/core/testing';

import { BannerService } from './banner-service.service';

describe('BannerServiceService', () => {
  let service: BannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
