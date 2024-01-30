import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import React, { ReactNode } from "react";

export const RouterDecorator = (story: () => ReactNode) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
};
