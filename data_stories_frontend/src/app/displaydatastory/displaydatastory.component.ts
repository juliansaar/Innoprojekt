import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-displaydatastory',
  templateUrl: './displaydatastory.component.html',
  styleUrls: ['./displaydatastory.component.css']
})
export class DisplaydatastoryComponent implements OnInit {
  name : string;
  items : string[] = [];
  constructor(private apiclient: ApiClientService, private route: ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.name = params['datastoryname'];
    }); 

    this.apiclient.getDatastory(this.name).subscribe( data => {
      for (let key in data){
        if (data.hasOwnProperty(key))
        this.items.push(data[key]);
     }
  });

  }
 
   
}

