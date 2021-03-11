import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { Subject } from "rxjs/internal/Subject";
import { MovieService } from "../app.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movieId: number;
  detail: any;
  unsubscribe: Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService
  ) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {
    this.movieId = this._activatedRoute.snapshot.params["id"];

    if (this.movieId) {
      this.getMovieDetail();
    }
  }

  getMovieDetail() {
    this._movieService
      .getMovieDetail(this.movieId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
