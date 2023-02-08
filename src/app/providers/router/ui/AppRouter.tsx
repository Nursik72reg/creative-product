import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "@/app/providers/router/config/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback='Идет загрузка'>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

