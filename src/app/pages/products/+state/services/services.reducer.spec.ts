import { LoadServices, LoadServicesFail } from './services.actions';
import { serviceReducer, initialState } from './services.reducer';

describe('Service Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = serviceReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

    describe('[Services API] Load Services Success', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadServices(),
            result = serviceReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Services API] Load Services Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadServicesFail({ error });
      const result = serviceReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

});
