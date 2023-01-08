import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-overview-ds-unbeantwortet',
  templateUrl: './overview-ds-unbeantwortet.component.html',
  styleUrls: ['./overview-ds-unbeantwortet.component.css']
})
export class OverviewDsUnbeantwortetComponent implements OnInit {
  datastorynames: string[] = [];

  constructor(private router: Router,private apiClient: ApiClientService) { }

  ngOnInit(): void {
    this.apiClient.getDatastoryNames().subscribe(data => {
      for (let key in data){
        if (data.hasOwnProperty(key))
        this.datastorynames.push(data[key]);
      }
  });
  }
  navigateToDatastory(datastoryname: string){
    this.router.navigate(['/displaydatastory', datastoryname]);
}
}
