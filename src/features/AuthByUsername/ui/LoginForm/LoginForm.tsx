import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selector/selectorLogin';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation(['main']);
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const handleChangeName = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value) => {
        dispatch(loginActions.setUserPassword(value));
    }, [dispatch]);

    const handleSubmitForm = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Ошибка логина', { ns: 'main' })} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                autoFocus
                onChange={handleChangeName}
                placeholder={t('Введите username')}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={handleChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                theme={ButtonTheme.PRIMARY}
                className={cls.loginBtn}
                onClick={handleSubmitForm}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
