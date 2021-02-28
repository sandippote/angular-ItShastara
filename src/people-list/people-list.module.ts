import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { RouterModule } from '@angular/router';
import { PEOPLE_ROUTE } from './people-list.route';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(PEOPLE_ROUTE)
  ],
  declarations: [
    PeopleListComponent
  ]
})
export class PeopleListModule { }