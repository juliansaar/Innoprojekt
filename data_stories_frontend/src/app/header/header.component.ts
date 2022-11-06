import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datastorynames : string[]
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
