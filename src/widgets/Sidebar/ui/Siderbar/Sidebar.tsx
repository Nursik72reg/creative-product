import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwithcer';
import { Button } from '@/shared/ui/Button/Button';

interface SidebarProps {
    className?:string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                {t('Переключатель')}
            </Button>
            <div className={cls.switchersBlock}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
