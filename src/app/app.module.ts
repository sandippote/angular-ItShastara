import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from "./navbar/navbar.component";
const routes: Routes = [
  {
    path: "people",
    loadChildren: () =>
      import("./list-people/list-people.module").then(l => l.ListPeopleModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./login/login.module").then(l => l.LoginModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [AppComponent, HelloComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
