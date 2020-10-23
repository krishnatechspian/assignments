import { headerButtonsReducer, initialState } from './headers-button.reducer';
describe('Header Button Reducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = headerButtonsReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

});
