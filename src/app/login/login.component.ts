import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  //   {
  //     "email": "eve.holt@reqres.in",
  //     "password": "cityslicka"
  // }
  authenticationError: boolean;

  loginForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private _router: Router
  ) {}

  ngOnInit() {}

  login(): void {
    this.loginService
      .login({
        email: this.loginForm.get("email")!.value,
        password: this.loginForm.get("password")!.value
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          // if (!this.router.getCurrentNavigation()) {
          //   this.router.navigate(['']);
          // }
          this._router.navigate(["auth"]);
        },
        () => (this.authenticationError = true)
      );
  }
}
