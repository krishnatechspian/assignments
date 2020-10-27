import { Product } from '../../../auth/data-models/product';
import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ProductsData extends EntityState<Product> {
  error?: Error;
  selectedProductId: number;
  loading: boolean;
}

export interface ProductsState {
  readonly products: ProductsData;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductsData = adapter.getInitialState({
  selectedProductId: null,
  loading: false
});

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    // case ProductsActionTypes.LoadHeadersButtons:
    //   return { ...state, loading: true };

    // case ProductsActionTypes.LoadImages:
    //   return { ...state, loading: true };

    // case ProductsActionTypes.LoadDetails:
    //   return { ...state, loading: true };

    // case ProductsActionTypes.LoadMain:
    //   return { ...state, loading: true };

    // case ProductsActionTypes.LoadServices:
    //   return { ...state, loading: true };


    case ProductsActionTypes.LoadProductsSuccess: {
      return adapter.setAll(action.payload, { ...state, error: undefined });
    }

    // case ProductsActionTypes.LoadHeadersButtonsSuccess: {
    //   return adapter.setAll(action.payload, { ...state, error: '' });
    // }

    // case ProductsActionTypes.LoadImagesSuccess: {
    //   return adapter.setAll(action.payload, { ...state, error: '' });
    // }

    // case ProductsActionTypes.LoadMainSuccess: {
    //   return adapter.setAll(action.payload, { ...state, error: '' });
    // }

    // case ProductsActionTypes.LoadDetailsFail: {
    //   return adapter.setAll(action.payload, { ...state, error: '' });
    // }

    // case ProductsActionTypes.LoadServicesSuccess: {
    //   return adapter.setAll(action.payload, { ...state, error: '' });
    // }

    case ProductsActionTypes.LoadProductsFail: {
      return { ...state, error: action.payload.error, loading: false };
    }

    // case ProductsActionTypes.LoadHeadersButtonsFail: {
    //   return adapter.removeAll({ ...state, error: action.payload });
    // }

    // case ProductsActionTypes.LoadServicesFail: {
    //   return adapter.removeAll({ ...state, error: action.payload });
    // }

    // case ProductsActionTypes.LoadImagesFail: {
    //   return adapter.removeAll({ ...state, error: action.payload });
    // }

    // case ProductsActionTypes.LoadDetailsFail: {
    //   return adapter.removeAll({ ...state, error: action.payload });
    // }

    // case ProductsActionTypes.LoadMainFail: {
    //   return adapter.removeAll({ ...state, error: action.payload });
    // }

    case ProductsActionTypes.UpdateProductsSuccess:
      return adapter.updateOne({ id: action.payload.id, changes: action.payload }, state);

    default:
      return state;
  }
}

export const getSelectedProductId = (state: ProductsData) =>
  state.selectedProductId;

export const {
  // select the array of user ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Productss
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal
} = adapter.getSelectors();
