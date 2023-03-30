import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: (arg:Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

    api: jest.Mocked<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: (arg:Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

        return result;
    }
}
