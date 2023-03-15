import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const getUserData = (state: StateSchema) => state.user;

export const getAuthData = createSelector(getUserData, (user) => user.authData);
