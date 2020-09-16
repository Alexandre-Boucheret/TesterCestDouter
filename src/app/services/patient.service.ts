import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private setHeaders(param: string): HttpHeaders {
    return new HttpHeaders( { 'Content-Type' : param });
    }

  getPatient(id : string): Observable<Patient> {
    return this.http.get<Patient>('https://fhir.eole-consulting.io/api/'+id, {
    headers: this.setHeaders('application/json')});
  }
}

