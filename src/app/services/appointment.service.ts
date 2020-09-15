import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../rest/restData';
import {OrderListModule} from 'primeng/orderlist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  private setHeaders(param: string): HttpHeaders {
  return new HttpHeaders( { 'Content-Type' : param });
  }


  getAppointments(id : string): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>('https://fhir.eole-consulting.io/api/appointment?participant.actor.reference=Practitioner/'+id, {
    headers: this.setHeaders('application/json')});
  }

  putAppointment(appointment : Appointment){
    this.http.put<Appointment>(environment.baseApiUrl+'appointment',appointment, {headers : this.setHeaders('application/json')}).subscribe(data => {
      
    });
  }

 
}
