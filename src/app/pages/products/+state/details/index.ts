import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDetails from './details.reducer';

export const getDetailsState = createFeatureSelector<fromDetails.DetailsData>('details');
export const getDetails  = createSelector(getDetailsState, fromDetails.selectAllDetails);
export const getDetailsEntnites = createSelector(getDetailsState, fromDetails.selectDetailEntities);




