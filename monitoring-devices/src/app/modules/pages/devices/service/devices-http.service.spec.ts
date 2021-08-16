import { TestBed } from '@angular/core/testing';

import { DevicesHttpService } from './devices-http.service';

describe('DevicesHttpService', () => {
  let service: DevicesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
