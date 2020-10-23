import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { ServicesEffects } from './services.effects';
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
              provide: ProductsService
            }
          ]
        });

        effects = TestBed.inject(ServicesEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });
});
