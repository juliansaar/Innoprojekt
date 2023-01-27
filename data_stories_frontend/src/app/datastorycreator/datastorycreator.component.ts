import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-datastorycreator',
  templateUrl: './datastorycreator.component.html',
  styleUrls: ['./datastorycreator.component.css'],
  
})
export class DatastorycreatorComponent implements OnInit {
  public form: Object = {components: []};
  tabs = [1, 2, 3];
  selected = new FormControl(0);
  name : string;
  file: File = null;
  showTemplate: number = 0;
  
  constructor(private apiclient: ApiClientService, private router: Router) { }


  ngOnInit(): void {

  }
 
  addTab() {
    if(this.tabs.length < 10){
    this.tabs.push((this.tabs.length + 1));
    this.selected.setValue(this.tabs.length - 1);}
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  nextT(tab: number) {
    this.selected.setValue(tab);
    this.showTemplate = 0;
    if(tab === this.tabs.length){
      this.addTab();
    }
  }
  submitFormBuilderForm(tab: number){
      var body = {template: 'template4', datastory: this.name, foilnumber: tab, "jsonForm": this.form, phase: 0}
      this.apiclient.createDataStory(body).subscribe((response) =>  { console.log(response) });
      this.selected.setValue(tab);
      this.showTemplate = 0;
    
  }
  send(){
  this.router.navigateByUrl('/success/' + this.name + '/' + 0);
  }
  
  onChange1(event){
    this.file = event.target.files[0];
  }
  
}
