import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMain from './main.reducer';

export const getMainState = createFeatureSelector<fromMain.MainData>('main');
export const getMain = createSelector(getMainState, fromMain.selectAllMain);
export const getMainEntnites = createSelector(getMainState, fromMain.selectMainEntities);



