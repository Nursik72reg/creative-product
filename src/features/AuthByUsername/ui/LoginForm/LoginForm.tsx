import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
    getError, getIsLoading, getPassword, getUsername,
} from '../../model/selector/selectorLogin';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onClose: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};
const LoginForm = (props: LoginFormProps) => {
    const { className, onClose } = props;
    const { t } = useTranslation(['main']);
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);

    const handleChangeName = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value) => {
        dispatch(loginActions.setUserPassword(value));
    }, [dispatch]);

    const handleSubmitForm = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onClose();
        }
    }, [dispatch, onClose, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>

    );
};

export default LoginForm;
