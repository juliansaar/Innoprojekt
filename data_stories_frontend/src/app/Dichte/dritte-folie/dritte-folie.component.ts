import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ApiClientService } from 'src/app/service/api-client.service';


@Component({
  selector: 'app-dritte-folie',
  templateUrl: './dritte-folie.component.html',
  styleUrls: ['./dritte-folie.component.css']
})
export class DritteFolieComponent implements OnInit {
  file: any;

  constructor(private router: Router, private apiclient: ApiClientService) { }

  ngOnInit(): void {
  }

  back = () => {
    this.router.navigateByUrl('dichte/2/1');
  }

  go = () => {
    let div = document.getElementById('photo');
    html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,'dichte_3')));

    this.router.navigateByUrl('dichte/2/3');
  };

}

