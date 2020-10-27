import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ProductsService } from '../services/products/products.service';
import { ProductsEffects } from './products.effects';
import { generateProduct } from 'src/app/auth/data-models/product';
import { LoadProducts, LoadProductsFail, LoadProductsSuccess } from './products.actions';
import { cold, hot } from 'jasmine-marbles';
describe('ProductsEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: ProductsEffects;
    let productService: ProductsService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            ProductsEffects,
            newLocal,
            {
              provide: ProductsService,
              useValue: { load: jest.fn() }
            }
          ]
        });

        effects = TestBed.inject(ProductsEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });

    describe('loadProduct', () => {
        it('should return a LoadProductsSuccess action, on success', () => {
          const product = generateProduct();

          const action = new LoadProducts();
          // tslint:disable-next-line: one-variable-per-declaration
          const completion = new LoadProductsSuccess(product),
          response = cold('a|', { a: product }),
          expected = cold('-b', { b: completion });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getProducts = jest.fn(() => response);

          expect(effects.  loadProducts$).toBeObservable(expected);

        });

        it('should return a LoadProductsFail action, with an error, on failure', () => {
          const action = new LoadProducts();
          const error = new Error();
          const outcome = new LoadProductsFail('error');
          const response = cold('#');
          const expected = cold('-b', { b: outcome });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getProducts = jest.fn(() => response);

          expect(effects.loadProducts$).toBeObservable(expected);
        });
      });
});
