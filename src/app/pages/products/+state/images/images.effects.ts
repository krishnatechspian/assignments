import { ProductsService } from './../../services/products/products.service';
import * as ImagesActions from '../images/images.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Image } from 'src/app/auth/data-models/image';
import { ImagesActionTypes } from '../images/images.actions';

@Injectable()
export class ImagesEffects {
  @Effect()
  loadFilteredImages$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/images')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getImages(category)
        .pipe(
          map((images: Image[]) => new ImagesActions.LoadImagesSuccess(images)),
          catchError(error => of(new ImagesActions.LoadImagesFail(error)))
        )
    )
  );

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType(ImagesActionTypes.LoadImages),
    mergeMap(() =>
      this.productService
        .getImages()
        .pipe(
          map(
            (images: Image[]) =>
            new ImagesActions.LoadImagesSuccess(images)
          ),
          catchError(error => of(new ImagesActions.LoadImagesFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
