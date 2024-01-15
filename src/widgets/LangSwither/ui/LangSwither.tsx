import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React from "react";
import Button, {ThemButton} from "shared/ui/Button/Button";
interface LangSwitherProps {
    className?: string;
}

export const LangSwither = ({className}: LangSwitherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <div className={classNames('',{},[className])}>
            <Button  them={ThemButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
        </div>
    );
};

export default LangSwither;


