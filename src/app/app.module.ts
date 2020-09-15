import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AppointmentService} from './services/appointment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule 
  ],
  providers: [
    AppointmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
