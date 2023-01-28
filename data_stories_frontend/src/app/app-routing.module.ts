import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './core/components/success/success.component';
import { DatastorycreatorComponent } from './datastorycreator/datastorycreator.component';
import { DataexplorerComponent } from './dataexplorer/dataexplorer.component';
import { DisplaydatastoryComponent } from './displaydatastory/displaydatastory.component';
import { DisplaydonedatastoriesComponent } from './displaydonedatastories/displaydonedatastories.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { OverviewDsAbgeschlossenComponent } from './overview-ds-abgeschlossen/overview-ds-abgeschlossen.component';
import { OverviewDsUnbeantwortetComponent } from './overview-ds-unbeantwortet/overview-ds-unbeantwortet.component';

const routes: Routes = [
  { path: 'success/:datastoryname/:phase', component: SuccessComponent },
  { path: 'survey/:datastoryname', component: SurveyComponent},
  { path: 'datastorycreator', component: DatastorycreatorComponent },
  { path: 'dataexplorer', component: DataexplorerComponent},
  { path: 'displaydatastory/:datastoryname', component: DisplaydatastoryComponent },
  { path: 'displaydonedatastory/:donedatastoryname', component: DisplaydonedatastoriesComponent },
  { path: '', component: HomeComponent},
  { path: 'ueberblick/abgeschlossen', component: OverviewDsAbgeschlossenComponent},
  { path: 'ueberblick/unbeantwortet', component: OverviewDsUnbeantwortetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
