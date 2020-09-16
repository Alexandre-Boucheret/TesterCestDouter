import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {
  options : any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultView : 'timeGridDay',
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
      height: 500,
      locale: 'fr',
      firstDay : 1,
      businessHours: {      
        startTime : '7:30', // a start time (10am in this example)
        endTime : '19:00', // an end time (6pm in this example)
      },
      nowIndicator : true,
  };
  }

}
