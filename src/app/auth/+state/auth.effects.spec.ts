import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { AuthEffects } from './auth.effects';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Authenticate, User } from '../data-models';
import { Login, LoginSuccess } from './auth.actions';
import { cold, hot } from 'jasmine-marbles';

describe('AuthEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions: Observable<any>;
  let effects: AuthEffects;
  let authService: AuthService;
  // tslint:disable-next-line: prefer-const
  let user: User = {
    username: 'krishna',
    id: 1,
    country: 'INDIA',
    token: 'fdfgdytduy',
    role: 'Admin',
  };
  const authenticate: Authenticate = {
    username: 'krishna',
    password: '123'
  };

  beforeEach(() => {
    const newLocal = provideMockActions(() => actions);
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        newLocal,
        {
          provide: AuthService,
          useValue: { load: jest.fn() }
        },
        {
          provide: Router,
          useValue: { navigate: jest.fn() },
        }
      ]
    });

    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should work', () => {
    const action = new Login(authenticate);
    const completion = new LoginSuccess(user);
    const response = cold('a|', { a: user });
    const expected = cold('-b', { b: completion });
    actions = hot('-a', { a: action });
    authService.login = jest.fn(() => response);
    expect(effects.login$).toBeObservable(expected);
  });
});
