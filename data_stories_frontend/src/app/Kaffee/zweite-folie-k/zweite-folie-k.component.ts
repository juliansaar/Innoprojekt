import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zweite-folie-k',
  templateUrl: './zweite-folie-k.component.html',
  styleUrls: ['./zweite-folie-k.component.css']
})
export class ZweiteFolieKComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back=  () => {
    this.router.navigateByUrl('kaffee/2/0');

  };

  go=  () => {
    this.router.navigateByUrl('kaffee/2/2');
  };
}
