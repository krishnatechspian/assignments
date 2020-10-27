
import { MainActions, MainActionTypes } from './main.actions';

import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Main } from 'src/app/auth/data-models/main';

export interface MainData extends EntityState<Main> {
  error?: Error;
  selectedMainId: number;
  loading: boolean;
}

export interface MainState {
  readonly main: MainData;
}

export const adapter: EntityAdapter<Main> = createEntityAdapter<Main>();

export const initialState: MainData = adapter.getInitialState({
  selectedMainId: null,
  loading: false
});

export function mainReducer(
  state = initialState,
  action: MainActions
): MainData {
  switch (action.type) {
    case MainActionTypes.LoadMain:
      return { ...state, loading: true };


    case MainActionTypes.LoadMainSuccess: {
      return adapter.setAll(action.payload, { ...state, error: undefined });
    }

    case MainActionTypes.LoadMainFail: {
      return { ...state, error: action.payload.error, loading: false };
    }

    default:
      return state;
  }
}

export const getselectedMainId = (state: MainData) =>
  state.selectedMainId;

export const {
  // select the array of user ids
  selectIds: selectMainIds,

  // select the dictionary of Products entities
  selectEntities: selectMainEntities,

  // select the array of Productss
  selectAll: selectAllMain,

  // select the total Products count
  selectTotal: selectMainTotal
} = adapter.getSelectors();
