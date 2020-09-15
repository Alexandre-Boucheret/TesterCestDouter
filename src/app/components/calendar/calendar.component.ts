import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/rest/restData';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  options : any;
  
  ListAppointments : Array<Appointment>;

  constructor(private appService : AppointmentService) {
    
   }

  ngOnInit(): void {
    
    this.ListAppointments = this.appService.getAppointmentsPractitioner("MedP1");
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
  }
}
}
