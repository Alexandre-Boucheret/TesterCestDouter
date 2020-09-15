import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  private setHeaders(param: string): HttpHeaders {
  return new HttpHeaders( { 'Content-Type' : param });
  }

  getAppointmentsPractitioner(id : string) : Array<Appointment>{
    let ListAppointments = new Array<Appointment>();
    this.getAppointments().subscribe(data => {
      data.forEach(appointment => {
        appointment.participant.forEach(participant => {
          if(participant.actor.reference.split("/",2)[1]===id){
            ListAppointments.push(appointment);
          }
        })
      })

      })
      
    return ListAppointments;
  }

  getAppointments(): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>('https://fhir.eole-consulting.io/api/appointment', {
    headers: this.setHeaders('application/json')});
  }

 
}
