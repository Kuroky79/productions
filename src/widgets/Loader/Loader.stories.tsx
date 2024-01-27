import type {Meta, Story} from '@storybook/react';
import React, {ReactNode} from "react";
import {ThemDecorator} from "shared/config/storybook/ThemDecorator/ThemDecorator";
import {Them} from "app/providers/ThemProvider";
import Loader from "widgets/Loader/Loader";



const meta: Meta = {
    title: 'widgets/Loader',
    component: Loader,
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
export const Light: Story = (args: { /* Sidebar props here */ }) => <Loader {...args} />;
Light.args = { /* appropriate Sidebar props here */ };

export const Dark: Story = (args: { /* Sidebar props here */ }) => <Loader {...args} />;
Dark.args = { /* appropriate Sidebar props here */ };
Dark.decorators = [ThemDecorator(Them.DARK)];

