import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import React from "react";
export enum ThemButton{
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    them?: ThemButton;
}

export const Button: FC<ButtonProps> = ({ className, children, them, ...otherProps }) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[them]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;