import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Datastorymodel } from './datastorymodel';
import { FormControl } from '@angular/forms';
import { Template1Component } from '../templates/template1/template1.component';
import { Template2Component } from '../templates/template2/template2.component';

@Component({
  selector: 'app-displaydatastory',
  templateUrl: './displaydatastory.component.html',
  styleUrls: ['./displaydatastory.component.css']
})
export class DisplaydatastoryComponent implements OnInit, Datastorymodel {
  @ViewChild(Template1Component, {static: false}) child:Template1Component;
  @ViewChild(Template2Component, {static: false}) childt2:Template2Component;
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
  constructor(private apiclient: ApiClientService, private route: ActivatedRoute, private router: Router) {   
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
    //console.log(this.content.length);
  }
  
  onSubmit(tab: number) {
      if (this.content[tab].component == 'template1'){ 
      this.child.onSubmit();
      this.selected.setValue(tab+1);
    }
      if(this.content[tab].component == 'template2'){
      this.childt2.onSubmit();
      this.selected.setValue(tab+1);
      }
 }
  

  onFinalSubmit(tab: number) {
    if (this.content[tab].component == 'template1'){ 
      this.child.onSubmit();
    }
    if(this.content[tab].component == 'template2'){
      this.childt2.onSubmit();
      }
    
    this.router.navigateByUrl('/success/' + this.name);
  }

   
}
