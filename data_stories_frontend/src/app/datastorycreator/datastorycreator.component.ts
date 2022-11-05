import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiClientService } from '../service/api-client.service';


@Component({
  selector: 'app-datastorycreator',
  templateUrl: './datastorycreator.component.html',
  styleUrls: ['./datastorycreator.component.css']
})
export class DatastorycreatorComponent implements OnInit {
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
  jsonForm: string;
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
   
  }
  tabs = ['1', '2', '3'];
  selected = new FormControl(0);

  addTab() {
    if(this.tabs.length < 10){
    this.tabs.push((this.tabs.length + 1).toString());
    this.selected.setValue(this.tabs.length - 1);}
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  @ViewChild(TemplateRef)
  labelContent: TemplateRef<any>;
  
  //FormBuilder
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  onChange(event) {
    console.log(event.form);
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.jsonForm = JSON.stringify(event.form, null, 4);
  }
  
  saveAndGo(tab: string){
    if (this.showTemplate == 1){
        this.apiclient.createDataStory(this.name,Number(tab), this.fragerunde, this.adressat,this.stand,this.datensatz,this.zeitraum_bis,this.zeitraum_von,this.messungsintervall,this.eintraege,null);
        this.selected.setValue(tab);
        this.showTemplate = 0;
    }

    if (this.showTemplate == 4){
      this.jsonForm = JSON.stringify(this.form, null, 4);
      console.log('Json:',this.jsonForm)
      console.log('tab:',tab)
      this.apiclient.createDataStory(this.name,Number(tab),null,null,null,null,null,null,null,null,this.jsonForm);
      this.selected.setValue(tab);
      this.showTemplate = 0;
    }
    
    
    
  }
  
  click(){
    this.apiclient.createDataStory(this.name,null, this.fragerunde, this.adressat,this.stand,this.datensatz,this.zeitraum_bis,this.zeitraum_von,this.messungsintervall,this.eintraege,null);
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
