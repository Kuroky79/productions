import React, {Suspense, useEffect, useState} from 'react';

import {classNames} from "shared/lib/classNames/classNames";
import {useThem} from "./providers/ThemProvider";

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import Modal from "shared/ui/Modal/Modal";
import Button from "shared/ui/Button/Button";




const App = () => {
    const {them} = useThem();
    return (
        <div className={classNames('app', {}, [])}>
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