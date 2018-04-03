import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { CategoriesListComponent } from './categories-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CategoriesListComponent
  ],
  exports: [
    CategoriesListComponent
  ]
})
export class CategoriesModule { }