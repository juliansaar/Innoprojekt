import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-notanswered',
  templateUrl: './notanswered.component.html',
  styleUrls: ['./notanswered.component.css']
})
export class NotansweredComponent implements OnInit {
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
