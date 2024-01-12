import React, {Suspense, useContext, useState} from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPages/AboutPage.async";
import {MainPageAsync} from "./pages/MainPages/MainPage.async";
import {Them, ThemContext} from "./theme/ThemContext";
import {useThem} from "./theme/useThem";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {them,toggleThem} = useThem()
    const bool = true;
    return (
        <div className={classNames('app',{},[them])}>
            <button onClick={toggleThem}>TOOGLE THEM</button>
                <Link to={'/'}>Главная страница</Link>
                <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;