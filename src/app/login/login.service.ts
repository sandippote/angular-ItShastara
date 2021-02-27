import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Login } from "./login.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  login(credentials: Login): Observable<any> {
    return this._http.post("https://reqres.in/api/login", credentials);
  }
}
