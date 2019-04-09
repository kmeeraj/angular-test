import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';
import {ValueService} from '../values/value.service';

describe('SimpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.get(ValueService);
  });

  it('should use ValueService', () => {
    service = TestBed.get(ValueService);
    expect(service.getValue()).toBe('real value');
  });
});
