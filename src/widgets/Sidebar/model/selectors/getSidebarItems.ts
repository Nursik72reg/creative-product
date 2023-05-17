import { createSelector } from '@reduxjs/toolkit';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import { RoutePaths } from '@/app/providers/router/config/routerConfig';

export const getSidebarItems = createSelector(
    getAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePaths.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePaths.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePaths.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePaths.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
