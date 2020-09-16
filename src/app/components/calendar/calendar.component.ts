import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Appointment, Patient } from 'src/app/rest/restData';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit,OnChanges {

  @Input() listAppointments : Array<Appointment>;
  @Input() titre : string;
  @Output() selectedAppointment: EventEmitter<Appointment> = new EventEmitter();
  @Input() loading : boolean;



  constructor(private appService: AppointmentService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.listAppointments){
      if(this.listAppointments){
      }
    }
  }


  ngOnInit(): void {
   
  }

  selectItem(event) {
    this.selectedAppointment.emit(event.value[0]);
  }

}
