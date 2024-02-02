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

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={classNames('app', {}, [them])}>
            <Suspense fallback="">
                <Navbar/>
                <button onClick={()=> setIsOpen(true)}>Toggle</button>
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                    DGFHDGHHHHHHHHHHHHHHHHHHHHHHDGHDGH
                </Modal>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;