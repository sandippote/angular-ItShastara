import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { ListPeopleComponent } from "./list-people.component";
import { LIST_ROUTE } from "./list-people.route";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([LIST_ROUTE]),

    MatCardModule,
    MatInputModule,
    MatButtonModule,

    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListPeopleComponent],
  providers: []
})
export class ListPeopleModule {}
