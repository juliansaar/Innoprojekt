import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anzahlAbgeschlossenerDS: number;
  anzahlUnbeantworteterDS: number;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.anzahlAbgeschlossenerDS = document.querySelector('#liste').getElementsByTagName("a").length;
      this.anzahlUnbeantworteterDS = document.querySelector('#liste2').getElementsByTagName("a").length;
    }, 100);
  }

  

}
