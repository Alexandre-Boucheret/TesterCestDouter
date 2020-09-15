import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AppointmentResponse } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class AppointmentResponseService {

  constructor(private http: HttpClient) { }

  private setHeaders(param: string): HttpHeaders {
    return new HttpHeaders( { 'Content-Type' : param });
    }

  createAppointmentResponse(appointmentResponse: AppointmentResponse) {
     this.http.post<AppointmentResponse>(environment.baseApiUrl + 'appointment-response', appointmentResponse,{
      headers: this.setHeaders('application/json')}).subscribe(data => {
        //do something
      })
  }

}
