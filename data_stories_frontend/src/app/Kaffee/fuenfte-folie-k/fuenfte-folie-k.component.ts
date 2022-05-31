import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuenfte-folie-k',
  templateUrl: './fuenfte-folie-k.component.html',
  styleUrls: ['./fuenfte-folie-k.component.css']
})
export class FuenfteFolieKComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('kaffee/2/4');
  };

  go=  () => {
    this.router.navigateByUrl('success');
  };
}
