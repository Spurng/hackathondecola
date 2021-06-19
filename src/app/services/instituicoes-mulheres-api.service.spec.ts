import { TestBed } from '@angular/core/testing';

import { InstituicoesMulheresApiService } from './instituicoes-mulheres-api.service';

describe('InstituicoesMulheresApiService', () => {
  let service: InstituicoesMulheresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituicoesMulheresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
