import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dataexplorer',
  templateUrl: './dataexplorer.component.html',
  styleUrls: ['./dataexplorer.component.css']
})
export class DataexplorerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  onChange(event) {
    console.log(event.form);
  }
}
