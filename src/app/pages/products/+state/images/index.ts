import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromImages from './images.reducer';

export const getImagesState = createFeatureSelector<fromImages.ImagesData>('images');
export const getImages = createSelector(getImagesState, fromImages.selectAllImages);
export const getImageEntnites = createSelector(getImagesState, fromImages.selectImageEntities);
// export const getSelectedImageId = createSelector(getImagesState, fromImages.selectImageIds);
// export const getSelectedImages = createSelector(getImageEntnites, getSelectedImageId, (imagesDictionary, id) => {
//    // tslint:disable-next-line: no-debugger
//    // debugger;
//    return  imagesDictionary[id];
// });



