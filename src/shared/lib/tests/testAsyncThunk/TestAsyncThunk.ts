import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { loginByUserName } from '@/features/AuthByUsername/model/services/loginByUserName/loginByUserName';

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: (arg:Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

    constructor(actionCreator: (arg:Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
