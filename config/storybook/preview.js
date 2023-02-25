import { addDecorator } from '@storybook/react';
import { StyleDecorator } from './decorator/styleDecorator';
import { ThemeDecorator } from './decorator/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from './decorator/routerDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
