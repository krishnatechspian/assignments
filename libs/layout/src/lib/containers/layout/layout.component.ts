import { Component, OnInit } from '@angular/core';
import { AuthService } from '@assignments/auth'
import { Observable } from 'rxjs';
import { User } from '@assignments/data-models';
import { Store } from '@ngrx/store';
import { AuthState } from '@assignments/auth';
import { getUser } from '@assignments/auth';
@Component({
  selector: 'assignments-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
  }

}
