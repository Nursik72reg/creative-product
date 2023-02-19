import React from 'react';

const MainPage = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ui/MainPage')), 1500);
}));

export { MainPage };
