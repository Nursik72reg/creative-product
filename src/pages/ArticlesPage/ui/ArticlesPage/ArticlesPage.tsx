import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from '@/entities/Article/model/types/article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
