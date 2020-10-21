import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromService from './services.reducer';

export const getServiceState = createFeatureSelector<fromService.ServiceData>('services');
export const getService = createSelector(getServiceState, fromService.selectAllService);
export const getServiceEntnites = createSelector(getServiceState, fromService.selectServiceEntities);
// export const getSelectedImageId = createSelector(getImagesState, fromImages.selectImageIds);
// export const getSelectedImages = createSelector(getImageEntnites, getSelectedImageId, (imagesDictionary, id) => {
//    // tslint:disable-next-line: no-debugger
//    // debugger;
//    return  imagesDictionary[id];
// });



