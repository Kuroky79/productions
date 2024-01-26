// StyleDecorator.ts
import React from 'react';
import {Story, StoryContext, StoryFn} from '@storybook/react';
import 'app/styles/index.scss'
export const StyleDecorator = (story: () => Story) => story();