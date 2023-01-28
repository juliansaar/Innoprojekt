import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ApiClientService } from './service/api-client.service';
import { HttpClientModule } from '@angular/common/http';
import { DatastorycreatorComponent } from './datastorycreator/datastorycreator.component';
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
import { OverviewDsUnbeantwortetComponent } from './overview-ds-unbeantwortet/overview-ds-unbeantwortet.component';
import { Template3Component } from './templates/template3/template3.component';



@NgModule({
  declarations: [
    AppComponent,
    DatastorycreatorComponent,
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
    OverviewDsUnbeantwortetComponent,
    Template3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
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
