import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?:string
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation(['about', 'main']);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.linkMain}>
                    {t('Главная страницы')}
                </AppLink>
                <AppLink to="/about">
                    {t('О себе')}
                </AppLink>
            </div>
        </div>
    );
};
