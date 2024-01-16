import { lazy } from "react";

export const AboutPageAsync = lazy(() =>
    new Promise<{ default: () => React.JSX.Element }>((resolve) => {
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
