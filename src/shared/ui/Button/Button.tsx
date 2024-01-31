import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import React, {ButtonHTMLAttributes, FC} from "react";
export enum ThemButton{
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    them?: ThemButton;
    square?: boolean;
}

export const Button: FC<ButtonProps> = ({ className, children, them,square, ...otherProps }) => {

    const mods = {
        [cls.square]: square
    }

    return (
        <button className={classNames(cls.Button, mods, [className, cls[them]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;