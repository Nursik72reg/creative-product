import { StateSchema } from '@/app/providers/StoreProvider';
import { getAuthData, getAuthInited } from './getUserData';

describe('getUserData', () => {
    const state: DeepPartial<StateSchema> = {
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
            _inited: false,
        },
    };
    test('should return user data', () => {
        expect(getAuthData(state as StateSchema)).toEqual({ id: '1', username: 'admin' });
    });

    test('should return user inited', () => {
        expect(getAuthInited(state as StateSchema)).toBe(false);
    });
});
