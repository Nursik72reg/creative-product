import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ThemeDecorator } from '../../../../config/storybook/decorator/themeDecorator';

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
