import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/internal/Subject";
import { MovieService } from "../app.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService
  ) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
