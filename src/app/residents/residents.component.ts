import { Component, OnInit } from '@angular/core';
import { Resident } from '../_models/resident.model';
import { ResidentService } from '../_services/resident.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  residents: Resident[];

  constructor(private residentService: ResidentService) { }

  ngOnInit() {
    this.residentService.getResidents().subscribe(
      data => {
        this.residents = data;
        console.log('user is:' + JSON.stringify(this.residents));
      }
    );
  }

}
