import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erste-folie-kcomponent',
  templateUrl: './erste-folie-k.component.html',
  styleUrls: ['./erste-folie-k.component.css']
})
export class ErsteFolieKComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick=  () => {
    this.router.navigateByUrl('kaffee/2/1');
};
}
