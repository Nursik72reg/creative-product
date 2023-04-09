import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const getProfileState = (state: StateSchema) => state.profile;
export const getProfileData = createSelector(getProfileState, (profileState) => profileState?.data);
export const getProfileIsLoading = createSelector(getProfileState, (profileState) => profileState?.isLoading);
export const getProfileError = createSelector(getProfileState, (profileState) => profileState?.error);
export const getProfileReadonly = createSelector(getProfileState, (profileState) => profileState?.readonly);
export const getProfileForm = createSelector(getProfileState, (profileState) => profileState?.form);
