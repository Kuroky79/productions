import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkThem} from "shared/ui/AppLink/AppLink";
import ThemSwither from "widgets/ThemSwither/ui/ThemSwither";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (

        <div className={classNames(cls.Navbar,{},[className])}>
            <ThemSwither/>
            <div className={cls.links}>
                <AppLink them={AppLinkThem.SECONDARY} to={'/'} className={cls.mainLink}>Главная страница</AppLink>
                <AppLink them={AppLinkThem.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
