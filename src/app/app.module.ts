import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";

// import { navbarRoute } from "./navbar/navbar.route";
// const LAYOUT_ROUTES = [navbarRoute];

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./navbar/navbar.module").then(n => n.NavbarModule)
  },
  {
    path: "people",
    loadChildren: () =>
      import("../people-list/people-list.module").then(p => p.PeopleListModule)
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

    MatIconModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
