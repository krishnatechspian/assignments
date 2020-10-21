import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = '[Products Page] Load Products',
  LoadProductsSuccess = '[Products API] Load Products Success',
  LoadProductsFail = '[Products API] LoadProducts Fail',
  UpdateProducts = '[Products Page] Update Products',
  UpdateProductsSuccess = '[Products API] Update Products Success',
  UpdateProductsFail = '[Products API] Update Products Fail',

  // LoadHeadersButtons = '[Headers Buttons] Load Headers Buttons',
  // LoadHeadersButtonsSuccess = '[Headers Buttons API] Load Headers Buttons Success',
  // LoadHeadersButtonsFail = '[Headers Buttons API]  Load Headers Buttons Fail',

  // LoadServices = '[Services] Load Services',
  // LoadServicesSuccess = '[Services API] Load Services Success',
  // LoadServicesFail = '[Services API]  Load Services Fail',

  // LoadImages = '[Images] Load Headers Buttons',
  // LoadImagesSuccess = '[Images API] Load Images Success',
  // LoadImagesFail = '[Images API]  Load Images Fail',

  // LoadMain = '[Main] Load Main',
  // LoadMainSuccess = '[Main API] Load Main Success',
  // LoadMainFail = '[Main API]  Load Main Fail',

  // LoadDetails = '[Details] Load  Details',
  // LoadDetailsSuccess = '[Details API] Load Details Success',
  // LoadDetailsFail = '[Details API]  Load Details Fail',
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}
export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: any) { }
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LoadProductsFail;
  constructor(public payload: any) { }
}

export class UpdateProductsSuccess implements Action {
  readonly type = ProductsActionTypes.UpdateProductsSuccess;
  constructor(public payload: any) { }
}

export class UpdateProductsFail implements Action {
  readonly type = ProductsActionTypes.UpdateProductsFail;
  constructor(public payload: any) { }
}


export class UpdateProducts implements Action {
  readonly type = ProductsActionTypes.UpdateProducts;
}


// export class LoadHeadersButtons implements Action {
//   readonly type = ProductsActionTypes.LoadHeadersButtons;
// }
// export class LoadHeadersButtonsSuccess implements Action {
//   readonly type = ProductsActionTypes.LoadHeadersButtonsSuccess;
//   constructor(public payload: any) { }
// }

// export class LoadHeadersButtonsFail implements Action {
//   readonly type = ProductsActionTypes.LoadHeadersButtonsFail;
//   constructor(public payload: any) { }
// }

// export class LoadImages implements Action {
//   readonly type = ProductsActionTypes.LoadImages;
// }
// export class LoadImagesSuccess implements Action {
//   readonly type = ProductsActionTypes.LoadImagesSuccess;
//   constructor(public payload: any) { }
// }

// export class LoadImagesFail implements Action {
//   readonly type = ProductsActionTypes.LoadImagesFail;
//   constructor(public payload: any) { }
// }

// export class LoadServices implements Action {
//   readonly type = ProductsActionTypes.LoadServices;
// }
// export class LoadServicesSuccess implements Action {
//   readonly type = ProductsActionTypes.LoadServicesSuccess;
//   constructor(public payload: any) { }
// }

// export class LoadServicesFail implements Action {
//   readonly type = ProductsActionTypes.LoadServicesFail;
//   constructor(public payload: any) { }
// }

// export class LoadMain implements Action {
//   readonly type = ProductsActionTypes.LoadMain;
// }
// export class LoadMainSuccess implements Action {
//   readonly type = ProductsActionTypes.LoadMainSuccess;
//   constructor(public payload: any) { }
// }

// export class LoadMainFail implements Action {
//   readonly type = ProductsActionTypes.LoadMainFail;
//   constructor(public payload: any) { }
// }

// export class LoadDetails implements Action {
//   readonly type = ProductsActionTypes.LoadDetails;
// }
// export class LoadDetailsSuccess implements Action {
//   readonly type = ProductsActionTypes.LoadDetailsSuccess;
//   constructor(public payload: any) { }
// }

// export class LoadDetailsFail implements Action {
//   readonly type = ProductsActionTypes.LoadDetailsFail;
//   constructor(public payload: any) { }
// }


export type ProductsActions = LoadProducts
  | LoadProductsSuccess | LoadProductsFail
  | UpdateProductsFail | UpdateProductsSuccess
  | UpdateProducts;
