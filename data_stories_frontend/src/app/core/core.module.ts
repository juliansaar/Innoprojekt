import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SuccessComponent } from './components/success/success.component'; 



@NgModule({
  declarations: [
  
    SuccessComponent,

  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [

    SuccessComponent,
  ]
})
export class CoreModule { }
