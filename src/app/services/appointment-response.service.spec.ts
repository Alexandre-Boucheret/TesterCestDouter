import { TestBed } from '@angular/core/testing';

import { AppointmentResponseService } from './appointment-response.service';

describe('AppointmentResponseService', () => {
  let service: AppointmentResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
