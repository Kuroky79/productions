import type {Meta, Story} from '@storybook/react';
import React, {ReactNode} from "react";
import {ThemDecorator} from "shared/config/storybook/ThemDecorator/ThemDecorator";
import {Them} from "app/providers/ThemProvider";
import {Sidebar} from "./Sidebar";


const meta: Meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
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
export const LightSidebar: Story = (args: { /* Sidebar props here */ }) => <Sidebar {...args} />;
LightSidebar.args = { /* appropriate Sidebar props here */ };

export const DarkSidebar: Story = (args: { /* Sidebar props here */ }) => <Sidebar {...args} />;
DarkSidebar.args = { /* appropriate Sidebar props here */ };
DarkSidebar.decorators = [ThemDecorator(Them.DARK)];

