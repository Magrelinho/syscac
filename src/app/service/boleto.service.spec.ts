import { TestBed } from '@angular/core/testing';

import { BoletoService } from './boleto.service';

describe('BoletoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoletoService = TestBed.get(BoletoService);
    expect(service).toBeTruthy();
  });
});
