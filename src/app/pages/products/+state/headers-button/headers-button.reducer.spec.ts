import { LoadHeadersButtons, LoadHeadersButtonsFail } from './headers-button.actions';
import { headerButtonsReducer, initialState } from './headers-button.reducer';
describe('Header Button Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = headerButtonsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });
    describe('Load Header Buttons Action', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadHeadersButtons(),
            result = headerButtonsReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Headers Buttons API]  Load Headers Buttons Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadHeadersButtonsFail({ error });
      const result = headerButtonsReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });
});
