import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { OrderListModule } from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';

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
    CardModule,
    HttpClientModule,
    OrderListModule,
    ProgressSpinnerModule, 
    ButtonModule
  ],
  providers: [
    AppointmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
