import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { OrderListModule } from 'primeng/orderlist';
import { AppointmentResponseService } from 'src/app/services/appointment-response.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ValidationRdvComponent } from './components/validation-rdv/validation-rdv.component';
import { AppointmentService } from './services/appointment.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';
import { FullcalendarComponent } from './components/fullcalendar/fullcalendar.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { PatientService } from './services/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ValidationRdvComponent,
    FullcalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    OrderListModule,
    ProgressSpinnerModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule
  ],
  providers: [
    AppointmentService,
    AppointmentResponseService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
