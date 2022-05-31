import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zweite-folie',
  templateUrl: './zweite-folie.component.html',
  styleUrls: ['./zweite-folie.component.css']
})
export class ZweiteFolieComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  back=  () => {
    this.router.navigateByUrl('dichte/2/0');
  };

  go=  () => {
    this.router.navigateByUrl('dichte/2/2');
  };
}
