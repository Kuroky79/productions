// Import necessary types and components
import type {Meta, Story} from '@storybook/react';
import React, {ReactNode} from 'react';
import {ThemDecorator} from 'shared/config/storybook/ThemDecorator/ThemDecorator';
import {Them} from 'app/providers/ThemProvider';
import AppLink, {AppLinkThem} from "shared/ui/AppLink/AppLink";

// Define the metadata for your stories
const meta: Meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    }
};

// Export the metadata
export default meta;

// Define stories
export const Primary: Story = (args: { children: ReactNode }) => (
    <AppLink {...args}>Text</AppLink>
);
Primary.args = {
    children: 'Text',
    them: AppLinkThem.PRIMARY
};

export const Secondary: Story = (args: { children: ReactNode }) => (
    <AppLink {...args}>Text</AppLink>
);
Secondary.args = {
    children: 'Text',
    them: AppLinkThem.SECONDARY
};
export const PrimaryDark: Story = (args: { children: ReactNode }) => (
    <AppLink {...args}>Text</AppLink>
);
PrimaryDark.args = {
    children: 'Text',
    them: AppLinkThem.PRIMARY,
};
PrimaryDark.decorators = [ThemDecorator(Them.DARK)]
export const SecondaryDark: Story = (args: { children: ReactNode }) => (
    <AppLink {...args}>Text</AppLink>
);
SecondaryDark.args = {
    children: 'Text',
    them: AppLinkThem.SECONDARY,
};
SecondaryDark.decorators = [ThemDecorator(Them.DARK)]


