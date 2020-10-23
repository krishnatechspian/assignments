import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { MainEffects } from './main.effects';
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
              provide: ProductsService
            }
          ]
        });

        effects = TestBed.inject(MainEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });
});
