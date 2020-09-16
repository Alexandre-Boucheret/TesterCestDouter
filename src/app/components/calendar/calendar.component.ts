import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/rest/restData';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  @Input() listAppointments : Array<Appointment>;
  @Input() titre : string;
  @Output() selectedAppointment: EventEmitter<Appointment> = new EventEmitter();
  @Input() loading : boolean;

  constructor(private appService: AppointmentService) {
   }

  ngOnInit(): void {
  }

  selectItem(event) {
    this.selectedAppointment.emit(event.value[0]);
  }

}
