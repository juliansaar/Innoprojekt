import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erste-folie',
  templateUrl: './erste-folie.component.html',
  styleUrls: ['./erste-folie.component.css']
})
export class ErsteFolieComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
  }
  
  btnClick=  () => {
    this.router.navigateByUrl('dichte/2/1');
};
}
