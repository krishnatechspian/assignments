import { ServicesActions, ServicesActionTypes } from './services.actions';

import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Service } from 'src/app/auth/data-models/service';

export interface ServiceData extends EntityState<Service> {
  error: string;
  selectedServiceId: number;
  loading: boolean;
}

export interface ServiceState {
  readonly service: ServiceData;
}

export const adapter: EntityAdapter<Service> = createEntityAdapter<Service>({});

export const initialState: ServiceData = adapter.getInitialState({
  error: '',
  selectedServiceId: null,
  loading: false
});

export function serviceReducer(
  state = initialState,
  action: ServicesActions
): ServiceData {
  switch (action.type) {
    case ServicesActionTypes.LoadServices:
      return { ...state, loading: true };


    case ServicesActionTypes.LoadServicesSuccess: {
      return adapter.setAll(action.payload, { ...state, error: '' });
    }

    case ServicesActionTypes.LoadServicesFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getselectedServiceId = (state: ServiceData) =>
  state.selectedServiceId;

export const {
  // select the array of user ids
  selectIds: selectServiceIds,

  // select the dictionary of Products entities
  selectEntities: selectServiceEntities,

  // select the array of Productss
  selectAll: selectAllService,

  // select the total Products count
  selectTotal: selectServiceTotal
} = adapter.getSelectors();
