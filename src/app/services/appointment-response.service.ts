import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentResponseService {

  constructor(private http: HttpClient) { }

  createAppointmentResponse(appointmentResponse: JSON): Observable<JSON> {
    return this.http.post<JSON>(environment.baseApiUrl + 'appointment-response', appointmentResponse);
  }

}
