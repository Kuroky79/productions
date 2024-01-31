// Import necessary types and components
import type { Meta, Story } from '@storybook/react';
import { Button, ButtonThem } from './Button';
import React, { ReactNode } from 'react';
import { ThemDecorator } from 'shared/config/storybook/ThemDecorator/ThemDecorator';
import { Them } from 'app/providers/ThemProvider';

// Define the metadata for your stories
const meta: Meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// Export the metadata
export default meta;

// Define stories
export const Primary: Story = (args: { children: ReactNode }) => (
    <Button {...args}>Text</Button>
);
Primary.args = {
    children: 'Text',
};

export const Clear: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.CLEAR} {...args}>
        Text
    </Button>
);
Clear.args = {
    children: 'Text',
    them: ButtonThem.CLEAR,
};

export const Outline: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.OUTLINE} {...args}>
        Text
    </Button>
);
Outline.args = {
    children: 'Text',
    them: ButtonThem.OUTLINE,
};

export const OutlineDark: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.OUTLINE} {...args}>
        Text
    </Button>
);
OutlineDark.args = {
    children: 'Text',
    them: ButtonThem.OUTLINE,
};
OutlineDark.decorators = [ThemDecorator(Them.DARK)];
