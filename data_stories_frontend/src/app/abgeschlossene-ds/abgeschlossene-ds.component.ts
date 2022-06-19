import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-abgeschlossene-ds',
  templateUrl: './abgeschlossene-ds.component.html',
  styleUrls: ['./abgeschlossene-ds.component.css']
})
export class AbgeschlosseneDsComponent implements OnInit {
  imgs: any;
  items = [];

  constructor(private apiclient: ApiClientService) {
   }

  ngOnInit(): void {
    this.apiclient.getImagesDichte().subscribe( data => {
      for (let key in data){
        if (data.hasOwnProperty(key))
        this.items.push(data[key]);
      }
  })
  }

  }




