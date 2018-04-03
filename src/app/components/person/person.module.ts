import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list.component';
import { PersonEditComponent } from './person-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PersonListComponent,
    PersonEditComponent,
  ],
  exports: [
    PersonListComponent,
    PersonEditComponent
  ]
})
export class PersonModule { }
