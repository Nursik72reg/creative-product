import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorator/themeDecorator';
import { StoreDecorator } from '../../../../config/storybook/decorator/storeDecorator';
import { Navbar } from '@/widgets/Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({

})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {},
    },
})];
