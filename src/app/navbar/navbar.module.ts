import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { navbarRoute } from "./navbar.route";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([navbarRoute]),

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent],
  providers: []
})
export class NavbarModule {}
