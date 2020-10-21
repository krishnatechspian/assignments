
import { DetailsActions, DetailsActionTypes } from './details.actions';

import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Details } from 'src/app/auth/data-models/details';

export interface DetailsData extends EntityState<Details> {
  error: string;
  selectedDetailsId: number;
  loading: boolean;
}

export interface DetailsState {
  readonly details: DetailsData;
}

export const adapter: EntityAdapter<Details> = createEntityAdapter<Details>({});

export const initialState: DetailsData = adapter.getInitialState({
  error: '',
  selectedDetailsId: null,
  loading: false
});

export function detailsReducer(
  state = initialState,
  action: DetailsActions
): DetailsData {
  switch (action.type) {
    case DetailsActionTypes.LoadDetails:
      return { ...state, loading: true };


    case DetailsActionTypes.LoadDetailsSuccess: {
      return adapter.setAll(action.payload, { ...state, error: '' });
    }

    case DetailsActionTypes.LoadDetailsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getselectedDetailsId = (state: DetailsData) =>
  state.selectedDetailsId;

export const {
  // select the array of user ids
  selectIds: selectDetailIds,

  // select the dictionary of Products entities
  selectEntities: selectDetailEntities,

  // select the array of Productss
  selectAll: selectAllDetails,

  // select the total Products count
  selectTotal: selectDetailsTotal
} = adapter.getSelectors();
