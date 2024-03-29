import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '@/entities/Profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';

interface ProfileCardProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    data?: Profile;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
     onChangeFirstname?: (value?: string) => void;
     onChangeCity?: (value?: string) => void;
     onChangeAge?: (value?: string) => void;
     onChangeUsername?: (value?: string) => void;
     onChangeAvatar?: (value?: string) => void;
     onChangeCurrency?: (currency: Currency) => void;
     onChangeCountry?: (country: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, data, isLoading, error, readonly, onChangeLastname, onChangeFirstname, onChangeCity, onChangeAge,
        onChangeUsername, onChangeAvatar, onChangeCurrency, onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </div>
            )}
            <Input
                onChange={onChangeFirstname}
                readonly={readonly}
                className={cls.input}
                value={data?.first}
                placeholder={t('Ваше имя')}
            />
            <Input
                onChange={onChangeLastname}
                readonly={readonly}
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Ваше фамилия')}
            />
            <Input
                onChange={onChangeAge}
                readonly={readonly}
                className={cls.input}
                value={data?.age}
                placeholder={t('Ваш возраст')}
            />
            <Input
                onChange={onChangeCity}
                readonly={readonly}
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите логин пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};
