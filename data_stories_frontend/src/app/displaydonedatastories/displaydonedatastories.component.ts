import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-displaydonedatastories',
  templateUrl: './displaydonedatastories.component.html',
  styleUrls: ['./displaydonedatastories.component.css']
})
export class DisplaydonedatastoriesComponent implements OnInit {
  name : string;
  datastory: string;
  foilnumber: string;
  content: any;

  constructor(private apiclient: ApiClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['donedatastoryname'];
    }); 

  this.apiclient.getDatastory(this.name).subscribe((response) =>
     {
      this.datastory =  response.datastory;
      this.foilnumber = response.foilnumber;
      this.content = response.content;
     });
    
}   
  }

