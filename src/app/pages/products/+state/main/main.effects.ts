import { getMain } from './index';
import { ProductsService } from '../../services/products/products.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Image } from 'src/app/auth/data-models/image';
import {  MainActionTypes } from '../main/main.actions';
import * as MainActions from '../main/main.actions';
import { Main } from 'src/app/auth/data-models/main';
@Injectable()
export class MainEffects {
  @Effect()
  loadFilteredMain$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/main')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getMain(category)
        .pipe(
          map((main: Main[]) => new MainActions.LoadMainSuccess(main)),
          catchError(error => of(new MainActions.LoadMainFail(error)))
        )
    )
  );

  @Effect()
  loadMain$ = this.actions$.pipe(
    ofType(MainActionTypes.LoadMain),
    mergeMap(() =>
      this.productService
        .getMain()
        .pipe(
          map(
            (main: Main[]) =>
            new MainActions.LoadMainSuccess(main)
          ),
          catchError(error => of(new MainActions.LoadMainFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
