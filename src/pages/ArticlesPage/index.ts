import { lazy } from 'react';

const ArticlesPage = lazy(() => import('./ui/ArticlesPage/ArticlesPage'));

export { ArticlesPageSchema } from './model/types/articlesPageSchema';
export { ArticlesPage };
