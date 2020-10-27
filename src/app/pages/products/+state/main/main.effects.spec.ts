import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { MainEffects } from './main.effects';
import { generateMain } from 'src/app/auth/data-models/main';
import { LoadMain, LoadMainFail, LoadMainSuccess } from './main.actions';
import { cold, hot } from 'jasmine-marbles';
describe('MainEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: MainEffects;
    let productService: ProductsService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            MainEffects,
            newLocal,
            {
              provide: ProductsService,
              useValue: { load: jest.fn() }
            }
          ]
        });

        effects = TestBed.inject(MainEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });

    describe('loadMain', () => {
        it('should return a loadMainsuccess action, on success', () => {
          const main = generateMain();

          const action = new LoadMain();
          // tslint:disable-next-line: one-variable-per-declaration
          const completion = new LoadMainSuccess(main),
          response = cold('a|', { a: main }),
          expected = cold('-b', { b: completion });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getMain = jest.fn(() => response);

          expect(effects. loadMain$).toBeObservable(expected);

        });

        it('should return a LoadDetailsFail action, with an error, on failure', () => {
          const action = new LoadMain();
          const error = new Error();
          const outcome = new LoadMainFail('error');
          const response = cold('#');
          const expected = cold('-b', { b: outcome });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getMain = jest.fn(() => response);

          expect(effects.loadMain$).toBeObservable(expected);
        });
      });
});
