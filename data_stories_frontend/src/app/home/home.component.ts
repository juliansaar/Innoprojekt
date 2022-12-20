import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anzahlAbgeschlossenerDS: number;


  constructor() { }

  ngOnInit(): void {
    let liste= document.querySelector('#liste');
    console.log(liste.childElementCount);

    this.anzahlAbgeschlossenerDS = document.querySelector('#liste').getElementsByTagName("a").length;
  }

  

}
