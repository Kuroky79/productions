import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
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
        <div data-testid="sidebar" className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <button data-testid="sidebar-toggle" onClick={onToggle}>toSide</button>
            <div className={cls.swithers}>
                <ThemSwither/>
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;