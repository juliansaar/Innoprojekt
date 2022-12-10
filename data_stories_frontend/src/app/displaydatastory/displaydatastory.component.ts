import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Datastorymodel } from './datastorymodel';
import { FormControl } from '@angular/forms';

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
  selected = new FormControl(0);
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
      this.update()
     });
    
}   
  update() {
    //var basic_content = this.content[0];
    //this.component = basic_content.component;
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
 
   


