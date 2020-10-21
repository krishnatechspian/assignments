import { ProductsService } from '../../services/products/products.service';
import * as ServicesActions from '../services/services.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Service } from 'src/app/auth/data-models/service';
import { ServicesActionTypes } from '../services/services.actions';

@Injectable()
export class ServicesEffects {
  @Effect()
  loadFilteredService$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/services')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams.category),
    mergeMap((category: string) =>
      this.productService
        .getServices(category)
        .pipe(
          map((service: Service[]) => new ServicesActions.LoadServicesSuccess(service)),
          catchError(error => of(new ServicesActions.LoadServicesFail(error)))
        )
    )
  );

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType(ServicesActionTypes.LoadServices),
    mergeMap(() =>
      this.productService
        .getServices()
        .pipe(
          map((service: Service[]) => new ServicesActions.LoadServicesSuccess(service)),
          catchError(error => of(new ServicesActions.LoadServicesFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }
}
