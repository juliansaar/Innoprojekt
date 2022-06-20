import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-fuenfte-folie-k',
  templateUrl: './fuenfte-folie-k.component.html',
  styleUrls: ['./fuenfte-folie-k.component.css']
})
export class FuenfteFolieKComponent implements OnInit {

  constructor(private router: Router, private apiclient: ApiClientService) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('kaffee/2/4');
  };

  go=  () => {
    let div = document.getElementById('photo');
    html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,'kaffee_5')));
    this.router.navigateByUrl('success');
  };
}
