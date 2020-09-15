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

  initAppointmentResponse(): AppointmentResponse {
    const app = {...this.appointment};

    const appResp = new AppointmentResponse();
    appResp.resourceType = 'AppointmentResponse';
    appResp.id = uuidv4();
    appResp.appointment = new Reference();
    appResp.appointment.reference = 'Apppointment/' + this.appointment.id;
    appResp.actor = new Reference();
    this.appointment.participant.forEach(participant => {
      if (participant.actor.reference.startsWith('Patient')) {
        appResp.actor.reference = participant.actor.reference;
      }
    });

    return appResp;
  }

  validateAppointment() {
    const appResp = this.initAppointmentResponse();
    appResp.participantStatus = 'accepted';

    console.log('Retour post', this.appRespService.createAppointmentResponse(appResp));



    // this.appRespService.createAppointmentResponse();
  }

}
