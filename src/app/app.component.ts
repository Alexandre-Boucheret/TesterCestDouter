import { Component, OnInit } from '@angular/core';
import { Appointment } from './rest/restData';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Practitioner } from './rest/restData';
import { PractitionerService } from './services/practitioner.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ListAppointmentsATraiter : Array<Appointment>;
  ListAppointmentsAVenir : Array<Appointment>;
  practitioner : Practitioner;
  TitreListeAtraiter :string = "RDV à traiter";
  TitreListeValide : string ="RDV à venir";

  constructor(private appService : AppointmentService, private practitionerService: PractitionerService) {  
  }

  ngOnInit(): void {
    let ListAppointments: Array<Appointment>;
    this.appService.getAppointments("MedP1").subscribe(data => {
      ListAppointments = data.sort((a, b) => new Date (a.start).getTime()-new Date(b.start).getTime());
      this.ListAppointmentsATraiter = new Array();
      this.ListAppointmentsAVenir = new Array();
      ListAppointments.forEach(data  => {
        if(data.status=="booked"){
          this.ListAppointmentsAVenir.push(data);
        }else{
          this.ListAppointmentsATraiter.push(data);
        }
      })
    });
    this.practitionerService.getPractioner("MedP1").subscribe(p => this.practitioner = p);
  }

}