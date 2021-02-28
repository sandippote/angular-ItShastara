import { Route } from "@angular/router";
import { PeopleListComponent } from "./people-list.component";

export const PEOPLE_ROUTE: Route = {
  path: "",
  component: PeopleListComponent,
  data: {
    pageTitle: "People"
  }
};
