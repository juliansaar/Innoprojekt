import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {

  anzahlAbgeschlossenerDS: number;
  anzahlUnbeantworteterDS: number;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void{
    let liste= document.querySelector('#liste');
    let liste2= document.querySelector('#liste2');

      this.anzahlAbgeschlossenerDS = document.querySelector('#liste').getElementsByTagName("a").length;
      this.anzahlUnbeantworteterDS = document.querySelector('#liste2').getElementsByTagName("a").length;
    

  }

}
