import React from 'react';
import { RoutePaths } from '@/app/providers/router/config/routerConfig';
import AboutIcon from '@/shared/assets/icons/main.svg';
import MainIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'О себе',
    },
    {
        path: RoutePaths.profile,
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
];
