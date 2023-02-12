import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?:string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Перевод')}
        </Button>
    );
};
