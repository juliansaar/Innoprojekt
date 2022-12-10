import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErsteFolieComponent } from './Dichte/erste-folie/erste-folie.component';
import {ZweiteFolieComponent} from './Dichte/zweite-folie/zweite-folie.component';
import { DritteFolieComponent } from './Dichte/dritte-folie/dritte-folie.component';
import { AppComponent } from './app.component';
import { VierteFolieComponent } from './Dichte/vierte-folie/vierte-folie.component';
import { ErsteFolieKComponent } from './Kaffee/erste-folie-k/erste-folie-k.component';
import { ZweiteFolieKComponent } from './Kaffee/zweite-folie-k/zweite-folie-k.component';
import { DritteFolieKComponent } from './Kaffee/dritte-folie-k/dritte-folie-k.component';
import { VierteFolieKComponent } from './Kaffee/vierte-folie-k/vierte-folie-k.component';
import { FuenfteFolieKComponent } from './Kaffee/fuenfte-folie-k/fuenfte-folie-k.component';
import { SuccessComponent } from './core/components/success/success.component';
import { FuenfteFolieComponent } from './Dichte/fuenfte-folie/fuenfte-folie.component';
import { AlteDsComponent } from './Kaffee/alte-ds/alte-ds.component';
import { DatastorycreatorComponent } from './datastorycreator/datastorycreator.component';
import { AbgeschlosseneDsComponent } from './abgeschlossene-ds/abgeschlossene-ds.component';
import { KaffeeComponent } from './abgeschlossene-ds/kaffee/kaffee.component';
import { DataexplorerComponent } from './dataexplorer/dataexplorer.component';
import { DisplaydatastoryComponent } from './displaydatastory/displaydatastory.component';
import { DisplaydonedatastoriesComponent } from './displaydonedatastories/displaydonedatastories.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: 'dichte/2/0', component: ErsteFolieComponent },
  { path: 'dichte/2/1', component: ZweiteFolieComponent },
  { path: 'dichte/2/2', component: DritteFolieComponent },
  { path: 'dichte/2/3', component: VierteFolieComponent },
  { path: 'dichte/2/4', component: FuenfteFolieComponent },
  
  { path: 'kaffee/2/0', component: ErsteFolieKComponent },
  { path: 'kaffee/2/1', component: ZweiteFolieKComponent },
  { path: 'kaffee/2/2', component: DritteFolieKComponent },
  { path: 'kaffee/2/3', component: AlteDsComponent },
  { path: 'kaffee/2/4', component: VierteFolieKComponent },
  { path: 'kaffee/2/5', component: FuenfteFolieKComponent },

  { path: 'success', component: SuccessComponent },
  { path: 'survey', component: SurveyComponent},
  { path: 'datastorycreator', component: DatastorycreatorComponent },
  { path: 'abgeschlossen/dichte', component: AbgeschlosseneDsComponent},
  { path: 'abgeschlossen/kaffee', component: KaffeeComponent},
  { path: 'dataexplorer', component: DataexplorerComponent},
  { path: 'displaydatastory/:datastoryname', component: DisplaydatastoryComponent },
  { path: 'displaydonedatastory/:donedatastoryname', component: DisplaydonedatastoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
