import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-datastorycreator',
  templateUrl: './datastorycreator.component.html',
  styleUrls: ['./datastorycreator.component.css']
})
export class DatastorycreatorComponent implements OnInit {
  name : string;
  length : number;
  fragerunde: number;
  adressat: string;
  stand: string;
  datensatz: string;
  zeitraum_von: Date;
  zeitraum_bis: Date;
  messungsintervall: string;
  eintraege: number;
  file: File = null; // Variable to store file
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
   
  }

  @ViewChild(TemplateRef)
  labelContent: TemplateRef<any>;
  
  //FormBuilder
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  onChange(event) {
    console.log(event.form);
  }

  go(){
    console.log(this.stand)
  }
  
  click(){
    this.apiclient.createDataStory(this.name, this.length, this.fragerunde, this.adressat,this.stand,this.datensatz,this.zeitraum_bis,this.zeitraum_von,this.messungsintervall,this.eintraege);
  }
  onChange1(event){
    this.file = event.target.files[0];
  }
  onUpload(){
    this.apiclient.imageUploadAction(this.file,'name')
  }
}
