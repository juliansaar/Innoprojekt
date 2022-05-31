import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZweiteFolieComponent } from './Dichte/zweite-folie/zweite-folie.component';
import { ErsteFolieComponent } from './Dichte/erste-folie/erste-folie.component';
import { DritteFolieComponent } from './Dichte/dritte-folie/dritte-folie.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { FormsModule, NgModel } from '@angular/forms';
import { VierteFolieComponent } from './Dichte/vierte-folie/vierte-folie.component';
import { ErsteFolieKComponent } from './Kaffee/erste-folie-k/erste-folie-k.component';
import { NgModule } from '@angular/core';
import { ZweiteFolieKComponent } from './Kaffee/zweite-folie-k/zweite-folie-k.component';
import { DritteFolieKComponent } from './Kaffee/dritte-folie-k/dritte-folie-k.component';
import { VierteFolieKComponent } from './Kaffee/vierte-folie-k/vierte-folie-k.component';
import { FuenfteFolieKComponent } from './Kaffee/fuenfte-folie-k/fuenfte-folie-k.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FuenfteFolieComponent } from './Dichte/fuenfte-folie/fuenfte-folie.component';
import { AlteDsComponent } from './Kaffee/alte-ds/alte-ds.component';


@NgModule({
  declarations: [
    AppComponent,
    ZweiteFolieComponent,
    ErsteFolieComponent,
    DritteFolieComponent,
    VierteFolieComponent,
    ErsteFolieKComponent,
    ZweiteFolieKComponent,
    DritteFolieKComponent,
    VierteFolieKComponent,
    FuenfteFolieKComponent,
    FuenfteFolieComponent,
    AlteDsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatSidenavModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
