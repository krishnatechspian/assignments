import { productsReducer, initialState } from './products.reducer';

describe('Products Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = productsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
