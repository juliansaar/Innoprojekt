import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZweiteFolieComponent } from './Dichte/zweite-folie/zweite-folie.component';
import { ErsteFolieComponent } from './Dichte/erste-folie/erste-folie.component';
import { DritteFolieComponent } from './Dichte/dritte-folie/dritte-folie.component';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
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
import { ApiClientService } from './service/api-client.service';
import { HttpClientModule } from '@angular/common/http';
import { DatastorycreatorComponent } from './datastorycreator/datastorycreator.component';
import { AbgeschlosseneDsComponent } from './abgeschlossene-ds/abgeschlossene-ds.component';
import { KaffeeComponent } from './abgeschlossene-ds/kaffee/kaffee.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormioModule } from '@formio/angular';
import { DataexplorerComponent } from './dataexplorer/dataexplorer.component';
import { DisplaydatastoryComponent } from './displaydatastory/displaydatastory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Template1Component } from './templates/template1/template1.component';
import { Template2Component } from './templates/template2/template2.component';
import { DisplaydonedatastoriesComponent } from './displaydonedatastories/displaydonedatastories.component';
import { SurveyComponent } from './survey/survey.component';
import { Template4Component } from './templates/template4/template4.component';
import { HomeComponent } from './home/home.component';
import { OverviewDsAbgeschlossenComponent } from './overview-ds-abgeschlossen/overview-ds-abgeschlossen.component';



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
    DatastorycreatorComponent,
    AbgeschlosseneDsComponent,
    KaffeeComponent,
    DataexplorerComponent,
    DisplaydatastoryComponent,
    HeaderComponent,
    FooterComponent,
    Template1Component,
    Template2Component,
    DisplaydonedatastoriesComponent,
    SurveyComponent,
    Template4Component,
    HomeComponent,
    OverviewDsAbgeschlossenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
   
    HttpClientModule,
    MatTabsModule,
    FormioModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
