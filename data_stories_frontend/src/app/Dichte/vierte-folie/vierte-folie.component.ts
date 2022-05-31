import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vierte-folie',
  templateUrl: './vierte-folie.component.html',
  styleUrls: ['./vierte-folie.component.css']
})
export class VierteFolieComponent implements OnInit {

  constructor(private router: Router) {
    
   }
 
  ngOnInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  back=  () => {
    this.router.navigateByUrl('dichte/2/2');
  };

  go=  () => {
    this.router.navigateByUrl('dichte/2/4');
    
  };
}