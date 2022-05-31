import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alte-ds',
  templateUrl: './alte-ds.component.html',
  styleUrls: ['./alte-ds.component.css']
})
export class AlteDsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('kaffee/2/2');
  };

  go=  () => {
    this.router.navigateByUrl('kaffee/2/4');
  };
}
