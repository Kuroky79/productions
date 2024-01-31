import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React from "react";
import Button, {ButtonThem} from "shared/ui/Button/Button";
interface LangSwitherProps {
    className?: string;
    short?: boolean;
}

export const LangSwither = ({className,short}: LangSwitherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <div className={classNames('',{},[className])}>
            <Button them={ButtonThem.CLEAR} onClick={toggle}>{t(short ? 'Короткий язык' : 'Язык') as any}</Button>
        </div>
    );
};

export default LangSwither;


