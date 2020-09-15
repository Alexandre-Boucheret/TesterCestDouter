import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

import { Appointment, Practitioner } from './rest/restData';
import { PractitionerService } from './services/practitioner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ListAppointments: Array<Appointment>;
  practitioner: Practitioner;
  appointmentSelected: Appointment;

  constructor(private appService: AppointmentService, private practitionerService: PractitionerService) {
  }

  ngOnInit(): void {
    this.appService.getAppointments('MedP1').subscribe(data => {
      this.ListAppointments = data.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    });
    this.practitionerService.getPractioner('MedP1').subscribe(p => this.practitioner = p);




  }
  getSelectedAppointment(event) {
    this.appointmentSelected = event;
  }
}
