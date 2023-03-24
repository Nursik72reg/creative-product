import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getAuthData } from './getUserData';

describe('getUserData', () => {
    const state: DeepPartial<StateSchema> = {
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    };
    test('should return user data', () => {
        expect(getAuthData(state as StateSchema)).toEqual({ id: '1', username: 'admin' });
    });
});
