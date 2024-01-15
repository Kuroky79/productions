import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import React from "react";
import ThemSwither from "widgets/ThemSwither/ui/ThemSwither";
import LangSwither from "widgets/LangSwither/ui/LangSwither";
interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed,setCollapsed] = useState(false);

    const onToggle =  () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <button onClick={onToggle}>toSide</button>
            <div className={cls.swithers}>
                <ThemSwither/>
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;