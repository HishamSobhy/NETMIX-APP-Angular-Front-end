import { TestBed } from '@angular/core/testing';

import { AdminServiesService } from './admin-servies.service';

describe('AdminServiesService', () => {
  let service: AdminServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
