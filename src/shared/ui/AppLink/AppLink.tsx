import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};
