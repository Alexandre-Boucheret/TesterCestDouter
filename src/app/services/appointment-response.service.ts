import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AppointmentResponse } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class AppointmentResponseService {

  constructor(private http: HttpClient) { }

  createAppointmentResponse(appointmentResponse: AppointmentResponse): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(environment.baseApiUrl + 'appointment-response', appointmentResponse);
  }

}
