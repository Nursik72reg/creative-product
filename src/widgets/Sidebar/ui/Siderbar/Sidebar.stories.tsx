import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from '@/widgets/Sidebar';
import { ThemeDecorator } from '../../../../../config/storybook/decorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
