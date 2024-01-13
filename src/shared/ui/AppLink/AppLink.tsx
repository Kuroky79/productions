import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkThem {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    them?: AppLinkThem;
}

const AppLink: React.FC<AppLinkProps> = ({ to, className, children, them = AppLinkThem.PRIMARY, ...otherProps }) => {
    return (
        <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[them]])}>
            {children}
        </Link>
    );
};

export default AppLink;
