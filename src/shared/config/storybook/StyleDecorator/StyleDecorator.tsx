// StyleDecorator.ts
import React from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import 'app/styles/index.scss'
export const StyleDecorator = (storyFn: StoryFn<React.ReactNode>, context: StoryContext) => {
    return <div></div>;
};
//dgfамп