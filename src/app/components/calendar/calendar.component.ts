import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Appointment } from 'src/app/rest/restData';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  @Input() ListAppointments : Array<Appointment>;
  @Input() Titre : string;
  options : any;
  @Output() selectedAppointment: EventEmitter<Appointment> = new EventEmitter();

  constructor(private appService: AppointmentService) {


   }

  ngOnInit(): void {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      buttonText: {
        day:      'jour',
        month:    'mois',
        week:     'semaine'
      },
      locale: 'fr',
      firstDay : 1
  };
}

selectItem(event) {
  console.log('TEST DE LA LECTURE D\'APPOINTMENT :', event.value[0]);
  this.selectedAppointment.emit(event.value[0]);
}

}
