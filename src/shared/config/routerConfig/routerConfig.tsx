import React from 'react';
import { AboutPage } from 'pages/AboutPages';
import { MainPage } from 'pages/MainPages';
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, { path: string; element: JSX.Element }> = {
    [AppRoutes.MAIN]: {
        path: RouterPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
