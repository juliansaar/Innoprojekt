import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-dataexplorer',
  templateUrl: './dataexplorer.component.html',
  styleUrls: ['./dataexplorer.component.css']
})
export class DataexplorerComponent implements OnInit {
  jsonRaw: Object;
  druck: number;
  leck: number;
  status: number;


  constructor(private apiClient: ApiClientService) {
   }

  ngOnInit(): void {   
}
onClick(){
  this.apiClient.getStatus(this.druck,this.leck).subscribe((response) =>
     {
      this.status =  response
     });
}
}
