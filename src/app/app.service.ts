import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getMoviesList(): Observable<any> {
    return this._http.get<any>(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41"
    );
  }

  getMovieNames(id: number): Observable<any> {
    return this._http.get<any>(
      "https://api.themoviedb.org/3/genre/" +
        id +
        "/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41"
    );
  }

  getMovieDetail(id: number): Observable<any> {
    return this._http.get<any>(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=68e82445c8842ba8616d0f6bf0e97a41"
    );
  }
}
