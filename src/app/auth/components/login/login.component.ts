import { AuthService } from './../../service/auth.service';
import { getAuthState } from './../../+state/index';
import { LoadHeadersButtons } from './../../../pages/products/+state/headers-button/headers-button.actions';
import { HeadersButtonState } from './../../../pages/products/+state/headers-button/headers-button.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthState } from './../../+state/auth.reducer';
import { Authenticate } from '../../data-models/authenticate';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as authActions from './../../+state/auth.actions';
import { HeaderButtons } from '../../data-models';
import { getHeaderButtons } from 'src/app/pages/products/+state/headers-button';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticate: Authenticate;
  isAuthenticated = false;
  headerButtons$: Observable<HeaderButtons[]>;
  getState: Observable<any>;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private store: Store<AuthState>,
    private authService: AuthService
  )
  // tslint:disable-next-line: no-trailing-whitespace
  {

  }


  ngOnInit(): void {
    this.authService.checkAuthentication();
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
