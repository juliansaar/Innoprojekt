import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

declare const hideNavbar: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datastorynames : string[] = []
  done_datastories : string[] = []
  constructor(private router: Router,private apiClient: ApiClientService) { }

  ngOnInit(): void {
    this.apiClient.getDatastoryNames().subscribe(data => {
      for (let key in data){
        if (data.hasOwnProperty(key))
        this.datastorynames.push(data[key]);
      }
  });
  this.apiClient.getDoneDataStories().subscribe(data => {
    for (let key in data){
      if (data.hasOwnProperty(key))
      this.done_datastories.push(data[key]);
    }
});


    }
    navigateToDatastory(datastoryname: string){
      this.router.navigate(['/displaydatastory', datastoryname]);
  }
  navigateToDoneDatastory(datastoryname: string){
    this.router.navigate(['/displaydonedatastory', datastoryname]);
}

  hideNav(){
    hideNavbar();
  }

}
