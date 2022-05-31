import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VierteFolieComponent } from './Dichte/vierte-folie/vierte-folie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;
  title = 'data_stories_frontend';
  @ViewChild('parent', { read: VierteFolieComponent })
  target!: VierteFolieComponent;
  private componentRef: ComponentRef<any> | undefined;


  constructor(private router: Router) {

  }

  click = () => {
    this.router.navigateByUrl('dichte/2/0');
    window.scrollTo(0, document.body.scrollHeight);
  };
  click1 = () => {
    this.router.navigateByUrl('kaffee/2/0');
    window.scrollTo(0, document.body.scrollHeight);
  };
}


