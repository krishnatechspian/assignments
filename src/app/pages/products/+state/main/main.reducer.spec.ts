import { mainReducer, initialState } from './main.reducer';

describe('Main Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = mainReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
