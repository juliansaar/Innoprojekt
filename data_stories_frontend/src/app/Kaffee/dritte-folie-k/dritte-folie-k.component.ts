import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-dritte-folie-k',
  templateUrl: './dritte-folie-k.component.html',
  styleUrls: ['./dritte-folie-k.component.css']
})
export class DritteFolieKComponent implements OnInit {

  isFormSubmitted: boolean = false;
  firstSituation: boolean = true;
  headline: String = "Kaffee ausgeben – Wasser nachziehen"
  counter: number = 0;
  currentStyles: Record<string,string> = {};
  imgUrl = "../assets/starker_ausschlag"
  
  constructor(private router: Router, private apiclient: ApiClientService) { }

  ngOnInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
    this.setCurrentStyles(this.firstSituation);
    this.setImgUrl(0)
  }

  onFormSubmit(form: NgForm) {
    if(this.counter == 3){
      this.router.navigateByUrl('kaffee/2/3')
    }

    this.isFormSubmitted = true;
    if(!form.valid){
      return; }
    else {
    if (form.controls['erste_situation'].value == 1 && form.controls['zweite_situation'].value == 3) {
      this.firstSituation = false;
      this.headline = "Ähnliche Situation"
      this.counter += 1;
      this.setCurrentStyles(this.firstSituation);
      this.setImgUrl(this.counter);
      let div = document.getElementById('photo');
      html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,`kaffee_3_${this.counter}`)));
    } else {
      let div = document.getElementById('photo');
      html2canvas(div).then(canvas => canvas.toBlob(blob => this.apiclient.imageUploadAction(blob,`kaffee_3_${this.counter}`)));
      this.router.navigateByUrl('kaffee/2/3');}
  }
 }
  back=  () => {
    if (this.counter == 0){
       this.router.navigateByUrl('kaffee/2/1');
    } else{
      this.counter --;
      if(this.counter ==0 ){
        this.headline = "Kaffee ausgeben – Wasser nachziehen"
        this.firstSituation = true;
        this.setCurrentStyles(this.firstSituation);
      }
      this.setImgUrl(this.counter);
    }
  };

  setCurrentStyles(firstSituation: boolean) {
    this.currentStyles = {
      'background-color': firstSituation ? '#1976d2' : 'green'
    };
  }

  setImgUrl(number: number){
    this.imgUrl = "../assets/starker_ausschlag" + String(number) + ".png"
  }
}