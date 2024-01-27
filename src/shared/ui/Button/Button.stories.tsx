// Import necessary types and components
import type { Meta, Story } from '@storybook/react';
import { Button, ThemButton } from './Button';
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

export const Clear: Story = (args: { children: ReactNode; them: ThemButton }) => (
    <Button them={ThemButton.CLEAR} {...args}>
        Text
    </Button>
);
Clear.args = {
    children: 'Text',
    them: ThemButton.CLEAR,
};

export const Outline: Story = (args: { children: ReactNode; them: ThemButton }) => (
    <Button them={ThemButton.OUTLINE} {...args}>
        Text
    </Button>
);
Outline.args = {
    children: 'Text',
    them: ThemButton.OUTLINE,
};

export const OutlineDark: Story = (args: { children: ReactNode; them: ThemButton }) => (
    <Button them={ThemButton.OUTLINE} {...args}>
        Text
    </Button>
);
OutlineDark.args = {
    children: 'Text',
    them: ThemButton.OUTLINE,
};
OutlineDark.decorators = [ThemDecorator(Them.DARK)];
