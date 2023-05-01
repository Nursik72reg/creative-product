import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthData } from '@/entities/User';
import { RoutePaths } from '@/app/providers/router/config/routerConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }

    return children;
}
