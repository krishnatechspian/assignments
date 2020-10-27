import { LoginSuccess, LoginFail } from './../+state/auth.actions';
import { AuthState } from './../+state/auth.reducer';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../data-models/user.d';
import { Authenticate } from '../data-models/authenticate';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient,
              private store: Store<AuthState>) {
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (user) {
    //   this.store.dispatch(new LoginSuccess(user));
    // }
  }

  // login user
  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
      environment.api_url + 'login',
      authenticate
    ).pipe(tap((user: User) => {
      this.userSubject$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }));
  }

  checkAuthentication(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return true;
    }else{
        return false;
    }
  }
}

