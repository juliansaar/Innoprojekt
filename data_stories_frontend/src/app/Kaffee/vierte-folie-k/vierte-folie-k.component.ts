import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vierte-folie-k',
  templateUrl: './vierte-folie-k.component.html',
  styleUrls: ['./vierte-folie-k.component.css']
})
export class VierteFolieKComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('kaffee/2/3');
  };

  go=  () => {
    this.router.navigateByUrl('kaffee/2/5');
  };

  onFormSubmit(form: NgForm) {
  }
}
