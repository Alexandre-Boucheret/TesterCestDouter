import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AppointmentResponse } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class AppointmentResponseService {

  constructor(private http: HttpClient) { }


  createAppointmentResponse(appointmentResponse: AppointmentResponse) {

    console.log('createAppointmentResponse : ', appointmentResponse);
    this.http.post<AppointmentResponse>(environment.baseApiUrl + 'appointment-response', appointmentResponse,
    { headers : this.setHeaders('application/json')})
    .subscribe({error : error => console.error('erreur du post', error)});
  }

  private setHeaders(param: string): HttpHeaders {
    return new HttpHeaders( { 'Content-Type' : param });
  }
}
