import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCount = (state: StateSchema) => state.count;

export const getCountValue = createSelector(getCount, (count) => count.value);
