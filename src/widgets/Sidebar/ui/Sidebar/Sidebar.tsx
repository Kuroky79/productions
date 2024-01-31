import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import ThemSwither from "widgets/ThemSwither/ui/ThemSwither";
import LangSwither from "widgets/LangSwither/ui/LangSwither";
import Button, {ButtonSize, ButtonThem} from "shared/ui/Button/Button";

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
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                onClick={onToggle}
                them={ButtonThem.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >{collapsed ? '>' : '<'}</Button>
            <div className={cls.swithers}>
                <ThemSwither/>
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;