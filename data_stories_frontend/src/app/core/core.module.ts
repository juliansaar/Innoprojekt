import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SuccessComponent } from './components/success/success.component'; 



@NgModule({
  declarations: [
    SidenavComponent,
    SuccessComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    SidenavComponent,
    SuccessComponent,
  ]
})
export class CoreModule { }
