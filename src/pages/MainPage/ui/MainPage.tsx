import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    return (
        <div>
            {t('Главная страницы')}
        </div>
    );
};

export default MainPage
