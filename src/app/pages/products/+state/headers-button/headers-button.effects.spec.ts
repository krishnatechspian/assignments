import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { HeaderButtonsEffects } from './headers-button.effects';
describe('HeaderButtonsEffects', () => {
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
              provide: ProductsService
            }
          ]
        });

        effects = TestBed.inject(HeaderButtonsEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });
});
