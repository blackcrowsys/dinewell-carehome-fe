import { Component, OnInit } from '@angular/core';
import { Resident } from '../_models/resident.model';
import { ResidentService } from '../_services/resident.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'dinewell-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  residents: Resident[];
  page = 1;

  constructor(private residentService: ResidentService) { }

  ngOnInit() {
    this.residentService.getResidents().subscribe(
      data => {
        this.residents = data;
        console.log('resident is:' + JSON.stringify(this.residents));
      },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.log(`Backend returned code ${err.status}, body was: ${err.error}` + JSON.stringify(err.error) +
                    ' message ' + JSON.stringify((err.message)));
            }
      }
    );
  }

}
