import { TestBed } from '@angular/core/testing';

import { DadosCarrosService } from './dados-carros.service';

describe('DadosCarrosService', () => {
  let service: DadosCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
