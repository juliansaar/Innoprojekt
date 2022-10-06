import { Component, OnInit } from '@angular/core';
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
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
  }

  click(){
    this.apiclient.createDataStory(this.name, this.length, this.fragerunde, this.adressat,this.stand,this.datensatz,this.zeitraum_bis,this.zeitraum_von,this.messungsintervall,this.eintraege);
  }
}
