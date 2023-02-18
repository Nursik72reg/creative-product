import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../../../config/storybook/decorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.PRIMARY,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.PRIMARY,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
