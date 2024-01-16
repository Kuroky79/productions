import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import './Loader.scss'
interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames('loader', {}, [className])}>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;