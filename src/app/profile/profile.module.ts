import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { Route, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { ProfileService } from "./profile.service";

const route: Route = {
  path: "",
  component: ProfileComponent
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([route]),

    MatCardModule,
    MatInputModule,
    MatButtonModule,

    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule {}
