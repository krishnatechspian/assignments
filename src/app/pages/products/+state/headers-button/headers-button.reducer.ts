import { HeaderButtons } from './../../../../auth/data-models/header-button.d';
import { Action } from '@ngrx/store';
import { HeaderButtonAction, HeaderButtonActionTypes } from '../headers-button/headers-button.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface HeaderButtonsData extends EntityState<HeaderButtons> {
  error: string;
  selectedHeaderButtonsId: number;
  loading: boolean;
}

export interface HeadersButtonState {
  readonly headerButtons: HeaderButtonsData;
}

export const adapter: EntityAdapter<HeaderButtons> = createEntityAdapter<HeaderButtons>({});

export const initialState: HeaderButtonsData = adapter.getInitialState({
  error: '',
  selectedHeaderButtonsId: null,
  loading: false
});

export function headerButtonsReducer(
  state = initialState,
  action: HeaderButtonAction
): HeaderButtonsData {
  switch (action.type) {
    case HeaderButtonActionTypes.LoadHeadersButtons:
      return { ...state, loading: true };

    case HeaderButtonActionTypes.LoadHeadersButtonsSuccess: {
      return adapter.setAll(action.payload, { ...state, error: '' });
    }

    case HeaderButtonActionTypes.LoadHeadersButtonsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getselectedHeaderButtonsId = (state: HeaderButtonsData) =>
  state.selectedHeaderButtonsId;

export const {
  // select the array of user ids
  selectIds: selectedHeaderButtonsIds,

  // select the dictionary of Products entities
  selectEntities: selectedHeaderButtonsEntities,

  // select the array of Productss
  selectAll: selectAllselectedHeaderButtons,

  // select the total Products count
  selectTotal: selectselectedHeaderButtonsTotal
} = adapter.getSelectors();
