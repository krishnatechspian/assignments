import { LoadMain, LoadMainFail } from './main.actions';
import { mainReducer, initialState } from './main.reducer';

describe('Main Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = mainReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

    describe('Load Main Action', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadMain(),
            result = mainReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Main API]  Load Main Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadMainFail({ error });
      const result = mainReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });
});
