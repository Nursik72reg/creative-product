import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nTest from '../../../config/i18n/i18nTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export interface renderWithRouterOptions {
    route?: string,
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component:ReactNode, options: renderWithRouterOptions = {}) {
    const { route = '/', initialState } = options;
    return render(

        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
