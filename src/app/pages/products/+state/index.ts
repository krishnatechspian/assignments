import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './products.reducer';

export const getProductsState = createFeatureSelector<fromProduct.ProductsData>('products');
export const getProducts = createSelector(getProductsState, fromProduct.selectAllProducts);
export const getProductEntnites = createSelector(getProductsState, fromProduct.selectProductEntities);
export const getSelectedProductId = createSelector(getProductsState, fromProduct.getSelectedProductId);
export const getSelectedProduct = createSelector(getProductEntnites, getSelectedProductId, (productsDictionary, id) => {
   // tslint:disable-next-line: no-debugger
   debugger;
   return  productsDictionary[id];
});
