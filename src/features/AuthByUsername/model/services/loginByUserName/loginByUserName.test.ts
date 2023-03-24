import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

import { loginByUserName } from './loginByUserName';
import { StateSchema } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('loginByUSerName', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login', async () => {
    //     const userValue = { id: '1', username: 'admin' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUserName({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUserName({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('success login', async () => {
        const userValue = { id: '1', username: 'admin' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
