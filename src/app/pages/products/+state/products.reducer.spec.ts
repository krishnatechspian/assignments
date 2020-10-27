import { LoadProducts, LoadProductsFail } from './products.actions';
import { productsReducer, initialState } from './products.reducer';
import { LoadServices } from './services/services.actions';

describe('Products Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = productsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });
    describe('[Products Page] Load Products Action', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadProducts(),
            result = productsReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Products API]  Load Products Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadProductsFail({ error });
      const result = productsReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });
});
