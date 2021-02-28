import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { People } from "../list-people/list-people.model";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private _http: HttpClient) {}

  profile(): Observable<any> {
    return this._http.get<People>("https://reqres.in/api/users/2");
  }
}
