import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-dataexplorer',
  templateUrl: './dataexplorer.component.html',
  styleUrls: ['./dataexplorer.component.css']
})
export class DataexplorerComponent implements OnInit {
  jsonRaw: Object;

  constructor(private apiClient: ApiClientService) {
   }

  ngOnInit(): void {
    this.apiClient.getAll().subscribe((data: any) => this.jsonRaw = {
       ...data
    });
    this.jsonRaw = this.jsonRaw[0]
    }
  show(){
    return this.jsonRaw.toString()
  }
}
