import { Store } from '@ngrx/store';
import { AuthState } from './../../+state/auth.reducer';
import { Authenticate } from '@assignments/data-models';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as authActions from './../../+state/auth.actions';
@Component({
  selector: 'assignments-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticate:Authenticate;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private store: Store<AuthState>) { }
​

  ngOnInit(): void {}

  login() {
    // dispatch login data into store
    this.store.dispatch(new authActions.Login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate));
  }
}
