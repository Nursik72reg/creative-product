import React from 'react';

const ProfilePage = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ui/ProfilePage')), 1500);
}));

export { ProfilePage };
