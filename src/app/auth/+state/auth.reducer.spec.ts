import { authReducer, initialState } from './auth.reducer';

describe('Auth Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = authReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
