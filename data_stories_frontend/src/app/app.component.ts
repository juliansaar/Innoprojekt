import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VierteFolieComponent } from './Dichte/vierte-folie/vierte-folie.component';
import { ApiClientService} from './service/api-client.service';

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
  error: any;
  datastorynames = [];
  done_datastories = [];
  constructor(private router: Router,private apiClient: ApiClientService) {
    
  }
  ngOnInit(){
  //   this.apiClient.getDatastoryNames1().subscribe(response => {
  //     this.datastorynames = ..response;
  //  });
 

  }
  navigateToDatastory(datastoryname: string){
    this.router.navigate(['/displaydatastory', datastoryname]);
  }
  click = () => {
    this.router.navigateByUrl('dichte/2/0');
    window.scrollTo(0, document.body.scrollHeight);
  };
  click1 = () => {
    this.router.navigateByUrl('kaffee/2/0');
    window.scrollTo(0, document.body.scrollHeight);
  };

  click2 = () => {
    this.router.navigateByUrl('abgeschlossen/dichte');
  };

click3 = () => {
  this.router.navigateByUrl('abgeschlossen/kaffee');
};

  click4 = () => {
    this.router.navigateByUrl('datastorycreator');
  };
  click5 = () => {
    this.router.navigateByUrl('dataexplorer');
  };
}


