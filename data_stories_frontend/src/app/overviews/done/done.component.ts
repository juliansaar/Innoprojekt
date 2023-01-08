import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  done_datastories : string[] = []
  constructor(private router: Router,private apiClient: ApiClientService) { }

  ngOnInit(): void {
  
  this.apiClient.getDoneDataStories().subscribe(data => {
    for (let key in data){
      if (data.hasOwnProperty(key))
      this.done_datastories.push(data[key]);
    }
});


    }
   
  navigateToDoneDatastory(datastoryname: string){
    this.router.navigate(['/displaydonedatastory', datastoryname]);
}
  

}
