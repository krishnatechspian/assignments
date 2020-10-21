import { ImagesActions, ImagesActionTypes } from './images.actions';

import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Image } from 'src/app/auth/data-models/image';

export interface ImagesData extends EntityState<Image> {
  error: string;
  selectedImagesId: number;
  loading: boolean;
}

export interface ImagesState {
  readonly products: ImagesData;
}

export const adapter: EntityAdapter<Image> = createEntityAdapter<Image>({});

export const initialState: ImagesData = adapter.getInitialState({
  error: '',
  selectedImagesId: null,
  loading: false
});

export function imagesReducer(
  state = initialState,
  action: ImagesActions
): ImagesData {
  switch (action.type) {
    case ImagesActionTypes.LoadImages:
      return { ...state, loading: true };


    case ImagesActionTypes.LoadImagesSuccess: {
      return adapter.setAll(action.payload, { ...state, error: '' });
    }

    case ImagesActionTypes.LoadImagesFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getselectedImagesId = (state: ImagesData) =>
  state.selectedImagesId;

export const {
  // select the array of user ids
  selectIds: selectImageIds,

  // select the dictionary of Products entities
  selectEntities: selectImageEntities,

  // select the array of Productss
  selectAll: selectAllImages,

  // select the total Products count
  selectTotal: selectImagesTotal
} = adapter.getSelectors();
