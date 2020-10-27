import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { ServicesEffects } from './services.effects';
import { generateService } from 'src/app/auth/data-models/service';
import { LoadServices, LoadServicesFail, LoadServicesSuccess } from './services.actions';
import { cold, hot } from 'jasmine-marbles';
describe('ServicesEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions: Observable<any>;
  let effects: ServicesEffects;
  let productService: ProductsService;

  beforeEach(() => {
    const newLocal = provideMockActions(() => actions);
    TestBed.configureTestingModule({
      providers: [
        ServicesEffects,
        newLocal,
        {
          provide: ProductsService,
          useValue: { load: jest.fn() }
        }
      ]
    });

    effects = TestBed.inject(ServicesEffects);
    productService = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });


  describe('loadService', () => {
    it('should return a LoadServiceSuccess action, on success', () => {
      const service = generateService();

      const action = new LoadServices();
      // tslint:disable-next-line: one-variable-per-declaration
      const completion = new LoadServicesSuccess(service),
        response = cold('a|', { a: service }),
        expected = cold('-b', { b: completion });

      actions = hot('-a', { a: action });

      // mock the load function to be the response
      productService.getServices = jest.fn(() => response);

      expect(effects.loadService$).toBeObservable(expected);

    });

    it('should return a LoadDetailsFail action, with an error, on failure', () => {
      const action = new LoadServices();
      const error = new Error();
      const outcome = new LoadServicesFail('error');
      const response = cold('#');
      const expected = cold('-b', { b: outcome });

      actions = hot('-a', { a: action });

      // mock the load function to be the response
      productService.getServices = jest.fn(() => response);

      expect(effects.loadService$).toBeObservable(expected);
    });
  });
});
