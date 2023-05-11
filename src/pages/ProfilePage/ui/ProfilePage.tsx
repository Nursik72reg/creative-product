import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly, getProfileValidateErrors,
    profileAction,
    ProfileCard,
    profileReducer,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { TextTheme, Text } from '@/shared/ui/Text/Text';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileAction.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileAction.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    readonly={readonly}
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
