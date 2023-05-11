import { createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
    },
});

export const { actions: articleDetailsAction } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
