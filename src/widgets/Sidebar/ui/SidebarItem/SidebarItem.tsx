import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';

interface SidebarItemProps {
    className?: string,
    item: SidebarItemType,
    collapsed: boolean
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation(['main', 'about']);
    const { className, item, collapsed } = props;
    const isAuth = useSelector(getAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [className])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text, { ns: ['main', 'about'] })}
            </span>
        </AppLink>
    );
});
