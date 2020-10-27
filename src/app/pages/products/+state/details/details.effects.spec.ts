import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { DetailsEffects } from './details.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { generateDetails } from 'src/app/auth/data-models/details';
import { LoadDetails, LoadDetailsFail, LoadDetailsSuccess } from './details.actions';
describe('DetailsEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: DetailsEffects;
    let productService: ProductsService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            DetailsEffects,
            newLocal,
            {
              provide: ProductsService,
              useValue: { load: jest.fn() }
            }
          ]
        });

        effects = TestBed.inject(DetailsEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });

    describe('loadDetails', () => {
        it('should return a LoadDetailsSuccess action, with the details, on success', () => {
          const details = generateDetails();

          const action = new LoadDetails();
          // tslint:disable-next-line: one-variable-per-declaration
          const completion = new LoadDetailsSuccess(details),
          response = cold('a|', { a: details }),
          expected = cold('-b', { b: completion });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getDetails = jest.fn(() => response);

          expect(effects.loadDetails$).toBeObservable(expected);

        });

        it('should return a LoadDetailsFail action, with an error, on failure', () => {
          const action = new LoadDetails();
          const error = new Error();
          const outcome = new LoadDetailsFail('error');
          const response = cold('#');
          const expected = cold('-b', { b: outcome });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getDetails = jest.fn(() => response);

          expect(effects.loadDetails$).toBeObservable(expected);
        });
      });
});
