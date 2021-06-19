import { TestBed } from '@angular/core/testing';

import { LeisMulheresApiService } from './leis-mulheres-api.service';

describe('LeisMulheresApiService', () => {
  let service: LeisMulheresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeisMulheresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
