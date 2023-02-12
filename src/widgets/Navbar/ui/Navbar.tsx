import React from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?:string
}

export const Navbar = ({ className }:NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.linkMain}>Главная</AppLink>
            <AppLink to="/about">О себе</AppLink>
        </div>
    </div>
);
