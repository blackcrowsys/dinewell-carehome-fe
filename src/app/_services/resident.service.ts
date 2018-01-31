import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Resident } from '../_models/resident.model';

@Injectable()
export class ResidentService {
    readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getResidents(): Observable<Resident[]>{
    return this.http.get<Resident[]>(`${this.API_URL}/api-resident-list`);
  }

}
