import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/Button";
import React from "react";
import './PageError.module.scss'
interface PageErrorProps {
    className?: string;
}


export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line 
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError,{},[className])}>
            <p>{t('Произошла непредвиденная ошибка' as any)}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу' as any)}
            </Button>
        </div>
    );
};

export default PageError;