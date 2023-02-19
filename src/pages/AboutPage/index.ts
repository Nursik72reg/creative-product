import React from 'react';

const AboutPage = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ui/AboutPage')), 1500);
}));

export { AboutPage };
