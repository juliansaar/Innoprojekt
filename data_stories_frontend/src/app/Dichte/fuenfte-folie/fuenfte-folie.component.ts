import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuenfte-folie',
  templateUrl: './fuenfte-folie.component.html',
  styleUrls: ['./fuenfte-folie.component.css']
})
export class FuenfteFolieComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

   sendData(data: any): any {
     this.change.emit(data);
   }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back=  () => {
    this.router.navigateByUrl('dichte/2/3');
  };

  go=  () => {
    this.router.navigateByUrl('success');
    this.sendData(true)
  };

  onFormSubmit(form: NgForm) {
  }
}

