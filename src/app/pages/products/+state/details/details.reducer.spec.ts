import { Details, generateDetails } from 'src/app/auth/data-models/details';
import { LoadDetails, LoadDetailsFail, LoadDetailsSuccess } from './details.actions';
import { detailsReducer, initialState } from './details.reducer';

describe('Details Reducer', () => {

    // tslint:disable-next-line: one-variable-per-declaration
    const details: Details = {
            text: 'ASAH',
            id: 1,
            url: 'https://i.ibb.co/mFHq21Y/header.jpg',
            details: 'All work and no play makes Jack a dull boy'
    };

    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = detailsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

    describe('Load Details Action', () => {
        test('should set loading to true', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new LoadDetails(),
            result = detailsReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

    describe('[Details API]  Load Details Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadDetailsFail({ error });
      const result = detailsReducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

});
