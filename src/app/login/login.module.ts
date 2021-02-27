import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { LOGIN_ROUTE } from "./login.route";

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  imports: [
    RouterModule.forChild([LOGIN_ROUTE]),

    MatButtonModule,
    MatInputModule,
    MatCardModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
