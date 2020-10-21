import { Action } from '@ngrx/store';

export enum MainActionTypes {
  LoadMain = '[Main] Load Main',
  LoadMainSuccess = '[Main API] Load Main Success',
  LoadMainFail = '[Main API]  Load Main Fail',
}

export class LoadMain implements Action {
  readonly type = MainActionTypes.LoadMain;
}
export class LoadMainSuccess implements Action {
  readonly type = MainActionTypes.LoadMainSuccess;
  constructor(public payload: any) { }
}

export class LoadMainFail implements Action {
  readonly type = MainActionTypes.LoadMainFail;
  constructor(public payload: any) { }
}


export type MainActions = LoadMain
  | LoadMainSuccess | LoadMainFail;
