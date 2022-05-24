import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZweiteFolieComponent } from './zweite-folie/zweite-folie.component';
import { ErsteFolieComponent } from './erste-folie/erste-folie.component';
import { DritteFolieComponent } from './dritte-folie/dritte-folie.component';
import {MatRadioModule} from '@angular/material/radio'; 
import { FormsModule, NgModel } from '@angular/forms';
import { VierteFolieComponent } from './vierte-folie/vierte-folie.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    ZweiteFolieComponent,
    ErsteFolieComponent,
    DritteFolieComponent,
    VierteFolieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
