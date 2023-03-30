import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

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
    size?: ButtonSize;
    disabled?: boolean
}

export const Button = ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
