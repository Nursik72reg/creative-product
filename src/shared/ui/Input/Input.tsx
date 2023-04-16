import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    onChange?: (value: string) => void;
    autoFocus?:boolean;
    readonly?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocus, setIsFocis] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            setIsFocis(true);
            inputRef?.current?.focus();
        }
    }, [autoFocus]);

    const isCaretVisible = isFocus && !readonly;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\+|-/ig, '');
        onChange?.(value);
        setCaretPosition(e.target.value.length);
    };

    const onFocus = () => {
        setIsFocis(true);
    };

    const onBlur = () => {
        setIsFocis(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}:`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />

                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
