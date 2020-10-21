import { Action } from '@ngrx/store';

export enum ServicesActionTypes {
   LoadServices = '[Services] Load Services',
  LoadServicesSuccess = '[Services API] Load Services Success',
  LoadServicesFail = '[Services API]  Load Services Fail',
}

export class LoadServices implements Action {
    readonly type = ServicesActionTypes.LoadServices;
  }
export class LoadServicesSuccess implements Action {
    readonly type = ServicesActionTypes.LoadServicesSuccess;
    constructor(public payload: any) { }
  }

export class LoadServicesFail implements Action {
    readonly type = ServicesActionTypes.LoadServicesFail;
    constructor(public payload: any) { }
  }



export type ServicesActions = LoadServices
  | LoadServicesSuccess | LoadServicesFail;
