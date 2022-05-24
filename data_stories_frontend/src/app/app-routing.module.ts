import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErsteFolieComponent } from './erste-folie/erste-folie.component';
import {ZweiteFolieComponent} from './zweite-folie/zweite-folie.component';
import { DritteFolieComponent } from './dritte-folie/dritte-folie.component';
import { AppComponent } from './app.component';
import { VierteFolieComponent } from './vierte-folie/vierte-folie.component';
const routes: Routes = [
  { path: 'dichte/2/0', component: ErsteFolieComponent },
  { path: 'dichte/2/1', component: ZweiteFolieComponent },
  { path: 'dichte/2/2', component: DritteFolieComponent },
  { path: 'dichte/2/3', component: VierteFolieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
