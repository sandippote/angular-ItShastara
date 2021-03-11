import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { Subject } from "rxjs/internal/Subject";
import { MovieService } from "../app.service";

export interface Genre {
  id: number;
  name: string;
  movies: any[];
}

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit, OnDestroy {
  genreList: Genre[] = [];
  unsubscribe: Subject<any>;
  constructor(private _movieService: MovieService, private _route: Router) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this._movieService
      .getMoviesList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.genreList = res.genres;
      });
  }

  getMovieName(genre: Genre, index: number): void {
    this._movieService
      .getMovieNames(genre.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.genreList[index]["movies"] = res.results;
        console.log(res);
      });
  }

  navigate(movie) {
    this._route.navigate(["/movie_detail/" + movie.id]);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
