import { LoadImages, LoadImagesFail } from './images.actions';
import { imagesReducer, initialState } from './images.reducer';

describe('Images Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = imagesReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

    describe('[Images Page] Load Images', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadImages(),
            result = imagesReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Images Page] Load Images Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadImagesFail({ error });
      const result = imagesReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });
});
