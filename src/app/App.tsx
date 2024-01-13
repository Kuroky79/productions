import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useThem} from "./providers/ThemProvider";

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";




const App = () => {
    const {them} = useThem()
    return (
        <div className={classNames('app', {}, [them])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;