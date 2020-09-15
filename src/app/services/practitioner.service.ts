import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Practitioner } from '../rest/restData';

@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  constructor(private http: HttpClient) { }

  getPractioners(): Observable<Array<Practitioner>>{
    return this.http.get<Array<Practitioner>>(environment.baseApiUrl + "practitioner");
  }
  
  getPractioner(id: string): Observable<Practitioner>{
    return this.http.get<Practitioner>(environment.baseApiUrl + "practitioner/" + id);
  }
}
