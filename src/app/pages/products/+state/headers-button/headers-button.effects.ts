import { ProductsService } from './../../services/products/products.service';
import { LoadHeadersButtons } from '../headers-button/headers-button.actions';
import { HeaderButtonActionTypes } from '../headers-button/headers-button.actions';
import { HeaderButtons } from './../../../../auth/data-models/header-button.d';
import * as HeaderButtonAction from '../headers-button/headers-button.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class HeaderButtonsEffects {
  @Effect()
  loadFilteredHeaderButtons$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/headers-button')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getHeaderButtons(category)
        .pipe(
          map((headerButtons: HeaderButtons[]) => new HeaderButtonAction.LoadHeadersButtonsSuccess(headerButtons)),
          catchError(error => of(new HeaderButtonAction.LoadHeadersButtonsFail(error)))
        )
    )
  );





  @Effect()
  loadHeadersButton$ = this.actions$.pipe(
    ofType(HeaderButtonActionTypes.LoadHeadersButtons),
    mergeMap(() =>
      this.productService
        .getHeaderButtons()
        .pipe(
          map(
            (headerButtons: HeaderButtons[]) =>
              new HeaderButtonAction.LoadHeadersButtonsSuccess(headerButtons)
          ),
          catchError(error => of(new HeaderButtonAction.LoadHeadersButtonsFail(error)))
        )
    )
  );


  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
