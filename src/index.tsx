import {render} from "react-dom";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";
import 'shared/config/i18n/i18n';
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import 'app/styles/index.scss'




render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemProvider>
                <App/>
            </ThemProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)