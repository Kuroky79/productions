import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkThem} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (

        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink them={AppLinkThem.SECONDARY} to={'/'} className={cls.mainLink}>Главная страница</AppLink>
                <AppLink them={AppLinkThem.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
