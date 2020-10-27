import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { generateDetails } from 'src/app/auth/data-models/details';
import { HeaderButtonsEffects } from './headers-button.effects';
import { generateHeaderButtons } from 'src/app/auth/data-models/header-button';
import { LoadHeadersButtons, LoadHeadersButtonsFail, LoadHeadersButtonsSuccess } from './headers-button.actions';
describe('HeaderButtonsEffect', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: HeaderButtonsEffects;
    let productService: ProductsService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            HeaderButtonsEffects,
            newLocal,
            {
              provide: ProductsService,
              useValue: { load: jest.fn() }
            }
          ]
        });

        effects = TestBed.inject(HeaderButtonsEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });

    describe('loadDetails', () => {
        it('should return a LoadDetailsSuccess action, with the details, on success', () => {
          const details = generateHeaderButtons();

          const action = new LoadHeadersButtons();
          // tslint:disable-next-line: one-variable-per-declaration
          const completion = new LoadHeadersButtonsSuccess(details),
          response = cold('a|', { a: details }),
          expected = cold('-b', { b: completion });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getHeaderButtons = jest.fn(() => response);

          expect(effects.loadHeadersButton$).toBeObservable(expected);

        });

        it('should return a LoadDetailsFail action, with an error, on failure', () => {
          const action = new LoadHeadersButtons();
          const error = new Error();
          const outcome = new LoadHeadersButtonsFail('error');
          const response = cold('#');
          const expected = cold('-b', { b: outcome });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getHeaderButtons = jest.fn(() => response);

          expect(effects.loadHeadersButton$).toBeObservable(expected);
        });
      });
});
