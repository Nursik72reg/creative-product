import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema';
import { ProfileSchema } from '@/entities/Profile';
import { ArticleDetailsSchema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';

export interface StateSchema {
    count: CounterSchema,
    user: UserSchema,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;

}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer:Reducer) => void
    remove: (key:StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
    api:AxiosInstance,
    navigation?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgs,
    state: StateSchema
}
