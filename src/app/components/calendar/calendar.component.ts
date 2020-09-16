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



  constructor(private appService: AppointmentService,private patientService : PatientService ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.listAppointments){
      if(this.listAppointments){
        this.listAppointments.forEach(d => {
          d.participant.forEach(participant =>{
            if(participant.actor.reference.split("/")[0]==='Patient'){
              let  patient : string ='';
              this.patientService.getPatient(participant.actor.reference).subscribe(data => {
                data.name[0].given.forEach(name => {
                  patient += " " + name;
                });
                participant.actor.display = patient;
              })
              
            }
          })
          console.log(d);
        })
      }
    }
  }


  ngOnInit(): void {
   
  }

  selectItem(event) {
    this.selectedAppointment.emit(event.value[0]);
  }

}
