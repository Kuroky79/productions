import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemSwither.module.scss'
import {Them, useThem} from "app/providers/ThemProvider";
import React from "react";
import Dark from 'shared/assets/Dark.svg'
import Sun from 'shared/assets/Sun.svg'
import Button, {ThemButton} from "shared/ui/Button/Button";

interface ThemSwitherProps {
    className?: string;
}

export const ThemSwither = ({className}: ThemSwitherProps) => {
    const {them,toggleThem} = useThem()
    return (
        <Button
            them={ThemButton.CLEAR}
            onClick={toggleThem}
            className={classNames(cls.ThemSwither, {}, [className])}
        >
            {them === Them.DARK ? <Dark/> : <Sun/>}
        </Button>
    );
};

export default ThemSwither;