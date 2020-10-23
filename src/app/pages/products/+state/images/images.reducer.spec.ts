import { imagesReducer, initialState } from './images.reducer';

describe('Images Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = imagesReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
