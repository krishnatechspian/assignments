import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { AuthEffects } from './auth.effects';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: AuthEffects;
    let productService: AuthService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            AuthEffects,
            newLocal,
            {
              provide: AuthService
            },
            {
                provide: Router,
                useValue: { navigate: jest.fn() },
            }
          ]
        });

        effects = TestBed.inject(AuthEffects);
        productService = TestBed.inject(AuthService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });
});
