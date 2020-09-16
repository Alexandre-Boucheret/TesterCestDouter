import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Appointment } from 'src/app/rest/restData';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit, OnChanges {
  @Input() listAppointments : Array<Appointment>;
  events: any[];
  options : any;
  constructor() { 
  }

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
    this.initEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initEvents();    
      
  }

  initEvents(){
    this.events = [];
    this.listAppointments.forEach(a => {
      this.events = [...this.events, {
        "title": a.description,
        "start": a.start,
        "end": a.end
      }];
    });
  }
}
