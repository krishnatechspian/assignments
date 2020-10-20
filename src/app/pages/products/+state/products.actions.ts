import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = '[Products Page] Load Products',
  LoadProductsSuccess = '[Products API] Load Products Success',
  LoadProductsFail = '[Products API] LoadProducts Fail',
  UpdateProducts = '[Products Page] Update Products',
  UpdateProductsSuccess = '[Products API] Update Products Success',
  UpdateProductsFail = '[Products API] Update Products Fail'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}
export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: any) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LoadProductsFail;
  constructor(public payload: any) {}
}

export class UpdateProductsSuccess implements Action {
  readonly type = ProductsActionTypes.UpdateProductsSuccess;
  constructor(public payload: any) {}
}

export class UpdateProductsFail implements Action {
  readonly type = ProductsActionTypes.UpdateProductsFail;
  constructor(public payload: any) {}
}


export class UpdateProducts implements Action {
  readonly type = ProductsActionTypes.UpdateProducts;
}



export type ProductsActions = LoadProducts 
| LoadProductsSuccess | LoadProductsFail 
| UpdateProductsFail | UpdateProductsSuccess | UpdateProducts;
