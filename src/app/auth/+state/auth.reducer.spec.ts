import { Authenticate, User } from '../data-models';
import { Login } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

describe('Auth Reducer', () => {
    const user: User = {
        username: 'krishna',
        id: 1,
        country: 'INDIA',
        token: 'fdfgdytduy',
        role: 'Admin',
      };
    const authenticate: Authenticate = {
        username: 'krishna',
        password: '123'
      };
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = authReducer(undefined, action);
            expect(result).toBe(initialState);
        });
    });

    describe('Login', () => {
        test('it should work', () => {
          // tslint:disable-next-line: one-variable-per-declaration
          const action = new Login(authenticate),
            result = authReducer(initialState, action);
        //   expect(result).toMatchSnapshot();
          expect(result).toEqual({
                ...initialState,
                error: undefined,
                loading: true
              });
        });
      });

});
