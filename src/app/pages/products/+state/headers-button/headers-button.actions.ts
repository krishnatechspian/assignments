import { Action } from '@ngrx/store';

export enum HeaderButtonActionTypes {

  LoadHeadersButtons = '[Headers Buttons] Load Headers Buttons',
  LoadHeadersButtonsSuccess = '[Headers Buttons API] Load Headers Buttons Success',
  LoadHeadersButtonsFail = '[Headers Buttons API]  Load Headers Buttons Fail'
}



export class LoadHeadersButtons implements Action {
  readonly type = HeaderButtonActionTypes.LoadHeadersButtons;
}
export class LoadHeadersButtonsSuccess implements Action {
  readonly type = HeaderButtonActionTypes.LoadHeadersButtonsSuccess;
  constructor(public payload: any) { }
}

export class LoadHeadersButtonsFail implements Action {
  readonly type = HeaderButtonActionTypes.LoadHeadersButtonsFail;
  constructor(public payload: any) { }
}




export type HeaderButtonAction =  LoadHeadersButtons | LoadHeadersButtonsFail | LoadHeadersButtonsSuccess ;
