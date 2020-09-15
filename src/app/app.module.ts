import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { OrderListModule } from 'primeng/orderlist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ValidationRdvComponent } from './components/validation-rdv/validation-rdv.component';
import { AppointmentService } from './services/appointment.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ValidationRdvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    OrderListModule,
    ProgressSpinnerModule
  ],
  providers: [
    AppointmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
