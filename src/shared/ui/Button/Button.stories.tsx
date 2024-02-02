// Import necessary types and components
import type { Meta, Story } from '@storybook/react';
import {Button, ButtonSize, ButtonThem} from './Button';
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
    <Button {...args}></Button>
);
Primary.args = {
    children: 'Text',
};

export const Clear: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.CLEAR} {...args}></Button>
);
Clear.args = {
    children: 'Text',
    them: ButtonThem.CLEAR,
};

export const ClearInverted: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.CLEAR} {...args}></Button>
);
ClearInverted.args = {
    children: 'Text',
    them: ButtonThem.CLEAR_INVERTED,
};

export const Outline: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.OUTLINE} {...args}></Button>
);
Outline.args = {
    children: 'Text',
    them: ButtonThem.OUTLINE,
};

export const OutlineDark: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button them={ButtonThem.OUTLINE} {...args}></Button>
);
OutlineDark.args = {
    children: 'Text',
    them: ButtonThem.OUTLINE,
};
OutlineDark.decorators = [ThemDecorator(Them.DARK)];


export const BackgroundThem: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button  {...args}></Button>
);
BackgroundThem.args = {
    children: 'Text',
    them: ButtonThem.BACKGROUND,
};

export const InvertedBachground: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button  {...args}></Button>
);
InvertedBachground.args = {
    children: 'Text',
    them: ButtonThem.BACKGROUND_INVERTED,
};

export const Square: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button  {...args}></Button>
);
Square.args = {
    children: '>',
    them: ButtonThem.BACKGROUND,
    square: true,
};

export const SquareSizeM: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button  {...args}></Button>
);
SquareSizeM.args = {
    children: '>',
    them: ButtonThem.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};
export const SquareSizeL: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button  {...args}></Button>
);
SquareSizeL.args = {
    children: '>',
    them: ButtonThem.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL: Story = (args: { children: ReactNode; them: ButtonThem }) => (
    <Button {...args}></Button>
);
SquareSizeXL.args = {
    children: '>',
    them: ButtonThem.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
