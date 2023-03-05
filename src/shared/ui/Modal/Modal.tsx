import {
    ReactNode,
    MouseEvent,
    useState,
    useRef,
    useEffect,
    useCallback,
} from 'react';
import cls from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    // ReturnType тип возврощяет так или иная функция
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
