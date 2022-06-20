import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-fuenfte-folie',
  templateUrl: './fuenfte-folie.component.html',
  styleUrls: ['./fuenfte-folie.component.css']
})
export class FuenfteFolieComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

   sendData(data: any): any {
     this.change.emit(data);
   }
  constructor(private router: Router,private apiclient: ApiClientService) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('dichte/2/3');
  };

  go=  () => {
    let div = document.getElementById('photo');
    html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,'dichte_5')));
    this.router.navigateByUrl('success');
    this.sendData(true)
  };

  onFormSubmit(form: NgForm) {
  }
}

