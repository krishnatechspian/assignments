
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeaderButton from './../headers-button/headers-button.reducer';

export const getHeaderButtonsState = createFeatureSelector<fromHeaderButton.HeaderButtonsData>('headers-button');
export const getHeaderButtons = createSelector(getHeaderButtonsState, fromHeaderButton.selectAllselectedHeaderButtons);
export const getHeaderButtonsEntnites = createSelector(getHeaderButtonsState, fromHeaderButton.selectedHeaderButtonsEntities);
export const getSelectedHeaderButtonsId = createSelector(getHeaderButtonsState, fromHeaderButton.getselectedHeaderButtonsId);
export const getSelectedHeaderButtons = createSelector(getHeaderButtonsEntnites, getSelectedHeaderButtonsId, (headerDictionary, id) => {
   // tslint:disable-next-line: no-debugger
   debugger;
   return  headerDictionary[id];
});
