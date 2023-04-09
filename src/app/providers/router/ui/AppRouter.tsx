import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/router/config/routerConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
    <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
);
