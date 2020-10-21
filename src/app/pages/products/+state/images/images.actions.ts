import { Action } from '@ngrx/store';

export enum ImagesActionTypes {
   LoadImages = '[Images Page] Load Images',
  LoadImagesSuccess = '[Images API] Load Images Success',
  LoadImagesFail = '[Images API]  Load Images Fail',
}

export class LoadImages implements Action {
  readonly type = ImagesActionTypes.LoadImages;
}
export class LoadImagesSuccess implements Action {
  readonly type = ImagesActionTypes.LoadImagesSuccess;
  constructor(public payload: any) { }
}

export class LoadImagesFail implements Action {
  readonly type = ImagesActionTypes.LoadImagesFail;
  constructor(public payload: any) { }
}



export type ImagesActions = LoadImages
  | LoadImagesSuccess | LoadImagesFail;
