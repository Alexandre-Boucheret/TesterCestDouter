import { Component, OnInit } from '@angular/core';
import { Appointment } from './rest/restData';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ListAppointments : Array<Appointment>;

  constructor(private appService : AppointmentService) {
    
  }

  ngOnInit(): void {
    this.appService.getAppointments("MedP1").subscribe(data => {
      this.ListAppointments = data;
    })
  }
}

