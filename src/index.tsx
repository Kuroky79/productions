import {render} from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemProvider from "./theme/ThemProvider";

render(
    <BrowserRouter>
        <ThemProvider>
            <App/>
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
)