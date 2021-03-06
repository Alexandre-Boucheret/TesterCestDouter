import { Component, OnChanges, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';

import { Appointment, Practitioner } from './rest/restData';
import { PatientService } from './services/patient.service';
import { PractitionerService } from './services/practitioner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  listAppointmentsATraiter: Array<Appointment>;
  listAppointmentsAVenir: Array<Appointment>;
  practitioner: any;
  selectedPractitoner: Practitioner;
  practitioners: SelectItem[];
  titreListeAtraiter: string = 'RDV à traiter';
  titreListeValide: string ='RDV à venir';
  appointmentSelected: Appointment;
  loading: boolean = false;

  constructor(private appService: AppointmentService, private practitionerService: PractitionerService,private patientService : PatientService ) {
  }

  ngOnInit(): void {
    setInterval(() => { this.refreshListes(); }, 20000);
    let ListAppointments: Array<Appointment>;
    this.practitionerService.getPractioners().subscribe(p => {
      this.practitioners = new Array();
      p.forEach(data => {
        this.practitioners.push(JSON.parse('{"name": "'+ data.name[0].text + " (" + data.identifier[0].value + ")"  +'", "value": ' + JSON.stringify(data) + '}'));
      });
      this.practitioner = this.practitioners[0];
      this.selectedPractitoner = this.practitioners[0].value;


      this.appService.getAppointments(this.selectedPractitoner.id).subscribe(data => {
        ListAppointments = data.sort((a, b) => new Date (a.start).getTime() - new Date(b.start).getTime());

        ListAppointments.forEach(d => {
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
        });

        this.listAppointmentsATraiter = new Array();
        this.listAppointmentsAVenir = new Array();
        ListAppointments.forEach(data  => {
          if(data.status=="booked" && new Date(data.start) >= new Date(Date.now())){
            this.listAppointmentsAVenir.push(data);
          } else if (data.status =='pending' && new Date(data.start) >= new Date(Date.now())) {
            this.listAppointmentsATraiter.push(data);
          }
        });
        this.loading = true;
      });    
    });  
  }

  selectedPractitionerChanged(event) {
    this.practitioner = event.value;
    this.selectedPractitoner = event.value.value;
    this.refreshListes();
  }
  
  getSelectedAppointment(event) {
    this.appointmentSelected = event;
  }

  refreshListes(){
    this.appointmentSelected = null;
    this.appService.getAppointments(this.selectedPractitoner.id).subscribe(data => {
      var listAppointments = data.sort((a, b) => new Date (a.start).getTime() - new Date(b.start).getTime());

      listAppointments.forEach(d => {
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
      })

      this.listAppointmentsATraiter = new Array();
      this.listAppointmentsAVenir = new Array();
      listAppointments.forEach(data  => {
        if(data.status=="booked" && new Date(data.start) >= new Date(Date.now())){
          this.listAppointmentsAVenir.push(data);
        } else if (data.status =='pending' && new Date(data.start) >= new Date(Date.now())) {
          this.listAppointmentsATraiter.push(data);
        }
      });
    });
  }

}
