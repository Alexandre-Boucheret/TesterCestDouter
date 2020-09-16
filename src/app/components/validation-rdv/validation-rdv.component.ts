import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Appointment, AppointmentResponse, Reference } from 'src/app/rest/restData';
import { v4 as uuidv4 } from 'uuid';
import { AppointmentService } from 'src/app/services/appointment.service';
import {AppointmentResponseService} from 'src/app/services/appointment-response.service';
import { Output } from '@angular/core';


@Component({
  selector: 'app-validation-rdv',
  templateUrl: './validation-rdv.component.html',
  styleUrls: ['./validation-rdv.component.css']
})
export class ValidationRdvComponent implements OnInit {

  @Input() appointment: Appointment;
  @Output() refreshListes: EventEmitter<Appointment> = new EventEmitter();
  commentaire : string ;

  constructor(private appRespService: AppointmentResponseService, private appService: AppointmentService) { }

  ngOnInit(): void {
    this.commentaire = '';
  }

  initAppointmentResponse(): AppointmentResponse {
    const app = {...this.appointment};

    let appResp = new AppointmentResponse();
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
    appResp.comment = this.commentaire;
    this.appointment.status = 'booked';
    this.appService.putAppointment(this.appointment);
    this.appRespService.createAppointmentResponse(appResp);
    this.refreshListes.emit(this.appointment); 
    this.appointment = null;
  }

  refuseAppointment(){
    const appResp = this.initAppointmentResponse();
    appResp.participantStatus = 'declined';
    appResp.comment = this.commentaire;
    this.appointment.status = 'cancelled';
    this.appService.putAppointment(this.appointment);
    this.appRespService.createAppointmentResponse(appResp);
    this.refreshListes.emit(this.appointment);
    this.appointment = null;
  }

}
