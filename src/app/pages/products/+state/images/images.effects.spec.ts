import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { ImagesEffects } from './images.effects';
describe('ImagesEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions: Observable<any>;
    let effects: ImagesEffects;
    let productService: ProductsService;

    beforeEach(() => {
        const newLocal = provideMockActions(() => actions);
        TestBed.configureTestingModule({
          providers: [
            ImagesEffects,
            newLocal,
            {
              provide: ProductsService
            }
          ]
        });

        effects = TestBed.inject(ImagesEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });
});
