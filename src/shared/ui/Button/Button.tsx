import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY ='primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}

export const Button = ({
    className, children, theme, ...otherProps
}: ButtonProps) => (
    <button type="button" {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
        {children}
    </button>
);
