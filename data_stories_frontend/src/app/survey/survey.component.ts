import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @ViewChild('text') text: ElementRef;
  @ViewChild('nein') nein: ElementRef;
  show = false;
  constructor() { }

 ngOnInit(): void {
  
let nein = document.getElementById('question1no');
let textfield = document.getElementById('text');

console.log(nein)
console.log(textfield)

if(nein){
  console.log("in If")
  this.show=true;
}else{
  this.show=false;
}

 }
   /* if(this.nein.nativeElement.checked){
      console.log('in IF');
      this.show = true;
     }

  }*/

  /*ngAfterViewInit(): void{
    this.text.nativeElement.innerHTML = "in AfterViewInit";
    console.log(this.nein.nativeElement.checked)

   if(this.nein.nativeElement.checked === true){
    this.text.nativeElement.innerHTML = "in IF"
    this.text.nativeElement.hidden == true;
   }
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }*/

}




