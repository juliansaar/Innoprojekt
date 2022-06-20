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
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
  }

  click(){
    this.apiclient.createDataStory(this.name, this.length);
  }
}
