import { Product } from './../../../auth/data-models/product.d';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from './../services/products/products.service';
import { ProductsActionTypes } from './../+state/products.actions';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import * as productActions from './../+state/products.actions';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadFilteredProducts$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/products')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getProducts(category)
        .pipe(
          map((products: Product[]) => new productActions.LoadProductsSuccess(products)),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    mergeMap(() =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProductsSuccess(products)
          ),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );



  @Effect()
  updateProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.UpdateProductsSuccess),
    mergeMap((action) =>
      this.productService
        .updateProducts((action as any).payload)
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProducts()
          ),
          catchError(error => of(new productActions.UpdateProductsFail(error)))
        )
    )
  );

 

  // @Effect()
  // loadImages$ = this.actions$.pipe(
  //   ofType(ProductsActionTypes.LoadImages),
  //   mergeMap(() =>
  //     this.productService
  //       .getImages()
  //       .pipe(
  //         map(
  //           (products: Product[]) =>
  //             new productActions.LoadImagesSuccess(products)
  //         ),
  //         catchError(error => of(new productActions.LoadImagesFail(error)))
  //       )
  //   )
  // );

  // @Effect()
  // loadDetails$ = this.actions$.pipe(
  //   ofType(ProductsActionTypes.LoadDetails),
  //   mergeMap(() =>
  //     this.productService
  //       .getDetails()
  //       .pipe(
  //         map(
  //           (products: Product[]) =>
  //             new productActions.LoadDetailsSuccess(products)
  //         ),
  //         catchError(error => of(new productActions.LoadDetailsFail(error)))
  //       )
  //   )
  // );

  // @Effect()
  // loadServices$ = this.actions$.pipe(
  //   ofType(ProductsActionTypes.LoadServices),
  //   mergeMap(() =>
  //     this.productService
  //       .getServices()
  //       .pipe(
  //         map(
  //           (products: Product[]) =>
  //             new productActions.LoadServicesSuccess(products)
  //         ),
  //         catchError(error => of(new productActions.LoadServicesFail(error)))
  //       )
  //   )
  // );

  // @Effect()
  // loadMain$ = this.actions$.pipe(
  //   ofType(ProductsActionTypes.LoadMain),
  //   mergeMap(() =>
  //     this.productService
  //       .getMain()
  //       .pipe(
  //         map(
  //           (products: Product[]) =>
  //             new productActions.LoadMainSuccess(products)
  //         ),
  //         catchError(error => of(new productActions.LoadMainFail(error)))
  //       )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
