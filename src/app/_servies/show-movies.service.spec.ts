import { TestBed } from '@angular/core/testing';

import { ShowMoviesService } from './show-movies.service';

describe('ShowMoviesService', () => {
  let service: ShowMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
