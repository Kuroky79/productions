import type { Meta, Story } from '@storybook/react';
import { Button, ThemButton } from './Button';
import React from "react";


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

export default meta;

// Define stories
export const Primary: Story = (args) => <Button {...args}>Text</Button>;
Primary.args = {
    children: 'Text',
};

export const Clear: Story = (args) => (
    <Button them={ThemButton.CLEAR} {...args}>
        Text
    </Button>
);
Clear.args = {
    children: 'Text',
    them: ThemButton.CLEAR,
};
export const Outline: Story = (args) => (
    <Button them={ThemButton.OUTLINE} {...args}>
        Text
    </Button>
);
Outline.args = {
    children: 'Text',
    them: ThemButton.OUTLINE,
};
