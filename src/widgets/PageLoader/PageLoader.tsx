import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss'
import './PageLoader.module.scss'
import React from "react";
import Loader from "widgets/Loader/Loader";
interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

export default PageLoader;