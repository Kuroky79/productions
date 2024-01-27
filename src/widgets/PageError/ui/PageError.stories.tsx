import type {Meta, Story} from '@storybook/react';
import React, {ReactNode} from "react";
import {ThemDecorator} from "shared/config/storybook/ThemDecorator/ThemDecorator";
import {Them} from "app/providers/ThemProvider";
import {PageError} from "./PageError";


const meta: Meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

// Define stories
export const Light: Story = (args: { /* Sidebar props here */ }) => <PageError {...args} />;
Light.args = { /* appropriate Sidebar props here */ };

export const Dark: Story = (args: { /* Sidebar props here */ }) => <PageError {...args} />;
Dark.args = { /* appropriate Sidebar props here */ };
Dark.decorators = [ThemDecorator(Them.DARK)];

