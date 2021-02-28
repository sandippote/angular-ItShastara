import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { People } from "./list-people.model";
import { ListPeopleService } from "./list-people.service";

@Component({
  selector: "app-list-people",
  templateUrl: "./list-people.component.html",
  styleUrls: ["./list-people.component.scss"]
})
export class ListPeopleComponent implements OnInit, OnDestroy {
  peoples: People[] = [];
  unsubscribe: Subject<any>;
  constructor(private _listPeopleService: ListPeopleService) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {
    this.peopleList();
  }

  peopleList(): void {
    this._listPeopleService.peopleList().subscribe(res => {
      this.peoples = res.data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
