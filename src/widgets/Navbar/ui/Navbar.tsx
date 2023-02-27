import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface NavbarProps {
    className?:string
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <BugButton />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>Loremdasdasdasdasd</Modal>
        </div>
    );
};
