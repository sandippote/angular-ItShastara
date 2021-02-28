import { Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { Subject } from "rxjs/internal/Subject";
import { People } from "../list-people/list-people.model";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  profile: People;
  unsubscribe: Subject<any>;
  constructor(private _profileService: ProfileService) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {
    this.peopleList();
  }

  peopleList(): void {
    this._profileService
      .profile()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.profile = res.data;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
