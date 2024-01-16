import { lazy } from "react";

export const MainPageAsync = lazy(() =>
    new Promise<{ default: () => React.JSX.Element }>((resolve) => {
        setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
