import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
const routes: Routes = [
  {
    path: "movie_list",
    component: MovieListComponent
  },
  {
    path: "movie_detail/:id",
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
