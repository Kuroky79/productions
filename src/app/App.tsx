import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useThem} from "./providers/ThemProvider";

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {them} = useThem()
    return (
        <div className={classNames('app', {}, [them])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;