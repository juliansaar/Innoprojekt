import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { Template1Component } from '../templates/template1/template1.component';

@Component({
  selector: 'app-datastorycreator',
  templateUrl: './datastorycreator.component.html',
  styleUrls: ['./datastorycreator.component.css'],
  
})
export class DatastorycreatorComponent implements OnInit {
  @ViewChild(Template1Component, {static: false}) child:Template1Component;
  public form: Object = {components: []};
  tabs = [1, 2, 3];
  selected = new FormControl(0);
  name : string;
  fragerunde: number;
  adressat: string;
  stand: string;
  datensatz: string;
  zeitraum_von: Date;
  zeitraum_bis: Date;
  messungsintervall: string;
  eintraege: number;
  file: File = null; // Variable to store file
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
  
  onChange(event) {
  }
  nextT(tab: number) {
    this.selected.setValue(tab);
    this.showTemplate = 0;
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
  onUpload(){
    this.apiclient.imageUploadAction(this.file,'name')
  }
  showFirstTemplate(){
    this.showTemplate = 1
  }
}
