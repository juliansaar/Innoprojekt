import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Datastorymodel } from './datastorymodel';

@Component({
  selector: 'app-displaydatastory',
  templateUrl: './displaydatastory.component.html',
  styleUrls: ['./displaydatastory.component.css']
})
export class DisplaydatastoryComponent implements OnInit, Datastorymodel {
  name : string;
  datastory: string;
  foilnumber: string;
  content: any;
  isFormBuilder: boolean;
  j: string;
  test: any;
  form: any;
  component: any;
  constructor(private apiclient: ApiClientService, private route: ActivatedRoute) {   
  }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.name = params['datastoryname'];
    }); 

  this.apiclient.getDatastory(this.name).subscribe((response) =>
     {
      this.datastory =  response.datastory;
      this.foilnumber = response.foilnumber;
      this.content = response.content;
     });
    
}   
  

showForm() : any{
return this.content.jsonForm;
}
click(){
  this.isFormBuilder = true;
  console.log(this.content.jsonForm);
  this.form = this.content.jsonForm;
  // this.test = JSON.parse(this.content);
  // console.log(this.test)
}

  }
 
   


