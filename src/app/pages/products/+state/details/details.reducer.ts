
import { DetailsActions, DetailsActionTypes } from './details.actions';

import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Details } from 'src/app/auth/data-models/details';

export interface DetailsData extends EntityState<Details> {
  error?: Error;
  selectedDetailsId: number;
  loading: boolean;
}

export interface DetailsState {
  readonly details: DetailsData;
}

export const adapter: EntityAdapter<Details> = createEntityAdapter<Details>();

export const initialState: DetailsData = adapter.getInitialState({
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
      // tslint:disable-next-line: deprecation
      return adapter.setAll(action.payload, { ...state, error: undefined });
    }

    case DetailsActionTypes.LoadDetailsFail: {
      return { ...state, error: action.payload.error, loading: false };
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
