import { TestBed } from '@angular/core/testing';

import { TogglerService } from './toggler.service';

describe('TogglerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TogglerService = TestBed.get(TogglerService);
    expect(service).toBeTruthy();
  });
});
