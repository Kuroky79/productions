import {render} from "react-dom";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemProvider from "app/providers/ThemProvider/ui/ThemProvider";


render(
    <BrowserRouter>
        <ThemProvider>
            <App/>
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
)