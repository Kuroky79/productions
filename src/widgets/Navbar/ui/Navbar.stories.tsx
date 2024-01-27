import type {Meta, Story} from '@storybook/react';
import React, {ReactNode} from "react";
import {ThemDecorator} from "shared/config/storybook/ThemDecorator/ThemDecorator";
import {Them} from "app/providers/ThemProvider";
import {Navbar} from "./Navbar";


const meta: Meta = {
    title: 'widgets/Navbar',
    component: Navbar,
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
export const Light: Story = (args: { /* Sidebar props here */ }) => <Navbar {...args} />;
Light.args = { /* appropriate Sidebar props here */ };

export const Dark: Story = (args: { /* Sidebar props here */ }) => <Navbar {...args} />;
Dark.args = { /* appropriate Sidebar props here */ };
Dark.decorators = [ThemDecorator(Them.DARK)];

