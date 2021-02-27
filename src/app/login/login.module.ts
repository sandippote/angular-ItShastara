import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { LOGIN_ROUTE } from "./login.route";

@NgModule({
  imports: [
    RouterModule.forChild([LOGIN_ROUTE]),

    MatCardModule,
    MatInputModule,
    MatButtonModule,

    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
