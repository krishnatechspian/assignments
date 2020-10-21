import { ProductsService } from '../../services/products/products.service';
import * as DetailsActions from '../details/details.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { DetailsActionTypes } from '../details/details.actions';
import { Details } from 'src/app/auth/data-models/details';

@Injectable()
export class DetailsEffects {
  @Effect()
  loadFilteredDetails$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/details')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getDetails(category)
        .pipe(
          map((details: Details[]) => new DetailsActions.LoadDetailsSuccess(details)),
          catchError(error => of(new DetailsActions.LoadDetailsFail(error)))
        )
    )
  );

  @Effect()
  loadDetails$ = this.actions$.pipe(
    ofType(DetailsActionTypes.LoadDetails),
    mergeMap(() =>
      this.productService
        .getDetails()
        .pipe(
          map(
            (details: Details[]) =>
            new DetailsActions.LoadDetailsSuccess(details)
          ),
          catchError(error => of(new DetailsActions.LoadDetailsFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
