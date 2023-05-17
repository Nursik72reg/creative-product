import { FC, lazy } from 'react';
import { AddCommentFormProps } from '@/features/addCommentForm/ui/AddCommentForm/AddCommentForm';

export { AddCommentFormSchema } from './model/types/addCommentForm';

export const AddCommentForm = lazy<FC<AddCommentFormProps>>(() => import('./ui/AddCommentForm/AddCommentForm'));
