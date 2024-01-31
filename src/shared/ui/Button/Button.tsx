import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import React, {ButtonHTMLAttributes, FC} from "react";
export enum ButtonThem{
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    them?: ButtonThem;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({ className, children, them,square,size, ...otherProps }) => {

    const mods = {
        [cls.square]: square,
        [cls[size]]: true
    }

    return (
        <button className={classNames(cls.Button, mods, [className, cls[them]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;