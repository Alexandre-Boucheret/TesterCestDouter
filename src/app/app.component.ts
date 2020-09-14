import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options : any;

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
        }
  }
  title = 'MedPlanner';
}
