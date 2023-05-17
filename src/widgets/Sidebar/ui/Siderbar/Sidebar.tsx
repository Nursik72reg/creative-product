import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwithcer';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { getSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems';

interface SidebarProps {
    className?:string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                square
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapsBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {sidebarItemsList.map((item) => <SidebarItem item={item} key={item.path} collapsed={collapsed} />)}
            </div>
            <div className={cls.switchersBlock}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
