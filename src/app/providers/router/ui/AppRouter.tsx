import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routerConfig } from '@/app/providers/router/config/routerConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                <Suspense fallback={<PageLoader />}>
                    {route.element}
                </Suspense>
            </div>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};
