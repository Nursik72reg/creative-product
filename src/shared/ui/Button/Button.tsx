import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    PRIMARY ='primary',
    BACKGROUND ='background',
    BACKGROUND_INVERTED ='background_inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ButtonTheme,
    square?: boolean
    size?: ButtonSize
}

export const Button = ({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
}: ButtonProps) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
        >
            {children}
        </button>
    );
};
