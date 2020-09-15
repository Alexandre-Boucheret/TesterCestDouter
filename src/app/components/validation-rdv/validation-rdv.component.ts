import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/rest/restData';

@Component({
  selector: 'app-validation-rdv',
  templateUrl: './validation-rdv.component.html',
  styleUrls: ['./validation-rdv.component.css']
})
export class ValidationRdvComponent implements OnInit {

  @Input()
  appointment: Appointment;

  constructor() { }

  ngOnInit(): void {
    this.appointment =  {} as Appointment;
  }

}
