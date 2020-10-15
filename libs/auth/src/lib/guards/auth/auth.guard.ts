import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';
import { map } from 'rxjs/operators';
import { AuthState } from '@assignments/auth';
import { Store, select } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}

  // If logged in user than login to main page, else just route to login page
  canActivate(
    next: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(select((state) => state.auth.user),
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}