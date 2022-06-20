import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-vierte-folie-k',
  templateUrl: './vierte-folie-k.component.html',
  styleUrls: ['./vierte-folie-k.component.css']
})
export class VierteFolieKComponent implements OnInit {

  constructor(private router: Router, private apiclient : ApiClientService) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('kaffee/2/3');
  };

  go=  () => {
    let div = document.getElementById('photo');
    html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,'kaffee_4')));
    this.router.navigateByUrl('kaffee/2/5');
  };

  onFormSubmit(form: NgForm) {
  }
}
