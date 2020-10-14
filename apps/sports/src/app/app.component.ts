import { LoginSuccess } from './../../../../libs/auth/src/lib/+state/auth.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@assignments/auth';
// import { LoginSuccess } from '@assignments/auth/src/lib/+state/auth.actions';

@Component({
  selector: 'assignments-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sports';

  constructor(private store: Store<AuthState>){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.store.dispatch(new LoginSuccess(user))
    }
  };
}
