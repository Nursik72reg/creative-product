import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
