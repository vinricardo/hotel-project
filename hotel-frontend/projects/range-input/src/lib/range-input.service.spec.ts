import { TestBed } from '@angular/core/testing';

import { RangeInputService } from './range-input.service';

describe('RangeInputService', () => {
  let service: RangeInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangeInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
