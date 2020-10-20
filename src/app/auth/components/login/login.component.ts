import { Store } from '@ngrx/store';
import { AuthState } from './../../+state/auth.reducer';
import { Authenticate } from '../../data-models/authenticate';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as authActions from './../../+state/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticate: Authenticate;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private store: Store<AuthState>
    )
    { }
​

  ngOnInit(): void {
      console.log('here');
  }

  // tslint:disable-next-line: typedef
  login() {
    // dispatch login data into store
    this.store.dispatch(new authActions.Login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate));
  }
}
