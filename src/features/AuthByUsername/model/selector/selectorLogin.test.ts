import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getError,
    getIsLoading, getLoginState, getPassword, getUsername,
} from './selectorLogin';

describe('getLoginState', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false,
        },
    };
    test('should return login state', () => {
        expect(getLoginState(state as StateSchema)).toEqual({ username: 'admin', password: '123', isLoading: false });
    });

    test('should return username', () => {
        expect(getUsername(state as StateSchema)).toEqual('admin');
    });

    test('should return password', () => {
        expect(getPassword(state as StateSchema)).toEqual('123');
    });

    test('should return isLoading', () => {
        expect(getIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        expect(getError(state as StateSchema)).toEqual(undefined);
    });
});
