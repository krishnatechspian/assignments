import { LoadDetails } from './details.actions';
import { detailsReducer, initialState } from './details.reducer';

describe('Details Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = detailsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
