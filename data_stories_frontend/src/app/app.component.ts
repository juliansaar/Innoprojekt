import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef,NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_stories_frontend';
  @ViewChild('parent', { read: ViewContainerRef })
  target!: ViewContainerRef;
  private componentRef: ComponentRef<any> | undefined;


  constructor(private router: Router) {
   
  }
 // addElement(){
   // let childComponent = this.componentFactoryResolver.resolveComponentFactory(ZweiteFolieComponent);
   // this.componentRef = this.target.createComponent(childComponent);
 // }
  click=  () => {
    this.router.navigateByUrl('dichte/2/0');
    window.scrollTo(0, document.body.scrollHeight);
};
}


