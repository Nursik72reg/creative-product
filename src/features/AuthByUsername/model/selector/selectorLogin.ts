import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state.loginForm;

export const getUsername = createSelector(getLoginState, (loginState) => loginState?.username || '');
export const getPassword = createSelector(getLoginState, (loginState) => loginState?.password || '');
export const getIsLoading = createSelector(getLoginState, (loginState) => loginState?.isLoading || false);
export const getError = createSelector(getLoginState, (loginState) => loginState?.error);
