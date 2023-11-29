import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { salledesportGuard } from './salledesport.guard';

describe('salledesportGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => salledesportGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
