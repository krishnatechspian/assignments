import { serviceReducer, initialState } from './services.reducer';

describe('Service Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = serviceReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
