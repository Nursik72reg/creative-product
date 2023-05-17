import { lazy } from 'react';

export const ArticleDetailsPage = lazy(() => import('./ui/ArticleDetailsPage/ArticleDetailsPage'));

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
