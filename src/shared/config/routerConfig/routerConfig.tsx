import React from 'react';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPages';
import { MainPage } from 'pages/MainPages';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
};
