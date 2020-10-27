import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { ImagesEffects } from './images.effects';
import { generateImages } from 'src/app/auth/data-models/image';
import { LoadImages, LoadImagesFail, LoadImagesSuccess } from './images.actions';
import { cold, hot } from 'jasmine-marbles';
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
              provide: ProductsService,
              useValue: { load: jest.fn() }
            }
          ]
        });

        effects = TestBed.inject(ImagesEffects);
        productService = TestBed.inject(ProductsService);
      });

    it('should be created', () => {
        expect(effects).toBeTruthy();
      });

    describe('loadImages', () => {
        it('should return a LoadImagesSuccess action, with the details, on success', () => {
          const details = generateImages();

          const action = new LoadImages();
          // tslint:disable-next-line: one-variable-per-declaration
          const completion = new LoadImagesSuccess(details),
          response = cold('a|', { a: details }),
          expected = cold('-b', { b: completion });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getImages = jest.fn(() => response);

          expect(effects.loadImages$).toBeObservable(expected);

        });

        it('should return a LoadImagesSuccess action, with an error, on failure', () => {
          const action = new LoadImages();
          const error = new Error();
          const outcome = new LoadImagesFail('error');
          const response = cold('#');
          const expected = cold('-b', { b: outcome });

          actions = hot('-a', { a: action });

        // mock the load function to be the response
          productService.getImages = jest.fn(() => response);

          expect(effects.loadImages$).toBeObservable(expected);
        });
      });
});
