import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Datastorymodel } from './datastorymodel';
import { FormControl } from '@angular/forms';
import { ApiClientService } from '../service/api-client.service';
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
  selected = new FormControl(0);
  last: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private apiclient: ApiClientService) {   
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
    this.last=false;
}   

  nextT(tab: number) {
    console.log('nextT',tab)
    if (tab+2 == this.content.length){
      this.last = true;
    }
    if (tab+1 == this.content.length){
      
      this.router.navigateByUrl('/success/' + this.name + '/' + 1);
    }
    console.log('nextT',tab)
    this.selected.setValue(tab+1);
  }

  onFinalSubmit() {
   this.router.navigateByUrl('/success/' + this.name + '/' + 1);
  }

   
}
