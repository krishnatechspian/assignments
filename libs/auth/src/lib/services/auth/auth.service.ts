import { environment } from './../../../../../../apps/sports/src/environments/environment';
import { Authenticate, User } from '@assignments/data-models';
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

  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
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
}
