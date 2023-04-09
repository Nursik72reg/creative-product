import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SidebarItemProps {
    className?: string,
    item: SidebarItemType,
    collapsed: boolean
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation(['main', 'about']);
    const { className, item, collapsed } = props;

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
