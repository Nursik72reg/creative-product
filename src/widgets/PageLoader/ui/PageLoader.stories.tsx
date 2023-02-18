import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { ThemeDecorator } from '../../../../config/storybook/decorator/themeDecorator';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

export default {
    title: 'widget/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof Navbar> = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
