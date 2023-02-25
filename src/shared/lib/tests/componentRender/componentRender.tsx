import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nTest from '../../../config/i18n/i18nTest';

export interface renderWithRouterOptions {
    route?: string
}

export function componentRender(component:ReactNode, options: renderWithRouterOptions = {}) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,

    );
}
