import { Component, Input, OnInit } from '@angular/core';
import { Appointment, AppointmentResponse, Reference } from 'src/app/rest/restData';
import { AppointmentResponseService } from 'src/app/services/appointment-response.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-validation-rdv',
  templateUrl: './validation-rdv.component.html',
  styleUrls: ['./validation-rdv.component.css']
})
export class ValidationRdvComponent implements OnInit {

  @Input()
  appointment: Appointment;

  constructor(private appRespService: AppointmentResponseService) { }

  ngOnInit(): void {
    this.appointment =  {} as Appointment;
  }

  validateAppointment() {
    const appResp = new AppointmentResponse();
    appResp.id = uuidv4();
    appResp.appointment = new Reference();
    appResp.appointment.reference = 'Apppointment/' + this.appointment.id;
    this.appointment.participant.forEach(participant => {
      if (participant.actor.reference.startsWith('Patient')) {
        let str = '';
        str = participant.actor.reference;
        appResp.actor.reference = 'Patient/' + str;
      }
    });

    // this.appRespService.createAppointmentResponse();
  }

}
