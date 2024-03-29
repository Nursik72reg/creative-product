import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from '../../../../config/storybook/decorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title lorem',
    text: 'text lorem ',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title lorem',
    text: 'text lorem ',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'text lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title lorem',
    text: 'text lorem ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title lorem',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'text lorem',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
