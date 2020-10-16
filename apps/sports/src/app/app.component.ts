import { LoginSuccess } from '@assignments/auth';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@assignments/auth';

@Component({
  selector: 'assignments-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sports';

  constructor(private store: Store<AuthState>){
   /* Get data of logged in user from localStorage. 

   if its true just route to main page.
   
   */
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.store.dispatch(new LoginSuccess(user))
    }
  };
}
