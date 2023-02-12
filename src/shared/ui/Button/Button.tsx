import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    theme?: ThemeButton
}

export const Button = ({
    className, children, theme = ThemeButton.CLEAR, ...otherProps
}: ButtonProps) => (
    <button type="button" {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
        {children}
    </button>
);
