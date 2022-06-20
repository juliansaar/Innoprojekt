import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-kaffee',
  templateUrl: './kaffee.component.html',
  styleUrls: ['./kaffee.component.css']
})
export class KaffeeComponent implements OnInit {
  imgs: any;
  items = [];
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
    this.apiclient.getImagesKaffee().subscribe( data => {
      for (let key in data){
        if (data.hasOwnProperty(key))
        this.items.push(data[key]);
      }
  })
  }

}
