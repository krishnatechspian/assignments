import { Action } from '@ngrx/store';

export enum DetailsActionTypes {
   LoadDetails = '[Details] Load  Details',
  LoadDetailsSuccess = '[Details API] Load Details Success',
  LoadDetailsFail = '[Details API]  Load Details Fail',
}

export class LoadDetails implements Action {
  readonly type = DetailsActionTypes.LoadDetails;
}
export class LoadDetailsSuccess implements Action {
  readonly type = DetailsActionTypes.LoadDetailsSuccess;
  constructor(public payload: any) { }
}

export class LoadDetailsFail implements Action {
  readonly type = DetailsActionTypes.LoadDetailsFail;
  constructor(public payload: any) { }
}

export type DetailsActions = LoadDetails
  | LoadDetailsSuccess | LoadDetailsFail;
