import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/router/config/routerConfig';

export const AppRouter = () => (
    <Suspense fallback="Идет загрузка">
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);
