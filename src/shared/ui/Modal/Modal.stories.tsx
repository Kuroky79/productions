// Import necessary types and components
import type {Meta, Story} from '@storybook/react';
import {Modal} from './Modal';
import React, {ReactNode} from 'react';
import {Them} from "app/providers/ThemProvider";
import {ThemDecorator} from "shared/config/storybook/ThemDecorator/ThemDecorator";


// Define the metadata for your stories
const meta: Meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

export const Primary: Story = (args: { children: ReactNode }) => (
    <Modal {...args}>Modal window</Modal>
);
Primary.args = {
    isOpen: true,
    children: '',
};
Primary.decorators = [ThemDecorator(Them.LIGHT)]

export const Dark: Story = (args: { children: ReactNode }) => (
    <Modal {...args}>Modal window</Modal>
);
Dark.args = {
    isOpen: true,
    children: '',
};
Dark.decorators = [ThemDecorator(Them.DARK)]
