import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?:string,
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t(short ? 'Короткая версия' : 'Перевод')}
        </Button>
    );
});
