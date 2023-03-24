import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer } from './loginSlice';
import { loginActions } from '@/features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from '@/features/AuthByUsername';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin1'))).toEqual({ username: 'admin1' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUserPassword('1234'))).toEqual({ password: '1234' });
    });
});
