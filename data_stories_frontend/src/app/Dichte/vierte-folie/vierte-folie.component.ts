import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-vierte-folie',
  templateUrl: './vierte-folie.component.html',
  styleUrls: ['./vierte-folie.component.css']
})
export class VierteFolieComponent implements OnInit {

  constructor(private router: Router, private apiclient: ApiClientService) {
    
   }
 
  ngOnInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  back=  () => {
    this.router.navigateByUrl('dichte/2/2');
  };

  go=  () => {
    let div = document.getElementById('photoiv');
    html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,'dichte_4')));
    this.router.navigateByUrl('dichte/2/4');
    
  };
}