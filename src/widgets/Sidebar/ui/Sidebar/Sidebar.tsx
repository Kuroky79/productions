import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import ThemSwither from "widgets/ThemSwither/ui/ThemSwither";
import LangSwither from "widgets/LangSwither/ui/LangSwither";
import Button, {ButtonSize, ButtonThem} from "shared/ui/Button/Button";
import AppLink, {AppLinkThem} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RouterPath} from "shared/config/routerConfig/routerConfig";
import HomeIcon from 'shared/assets/home.svg';
import AboutIcon from 'shared/assets/list.svg';
interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed,setCollapsed] = useState(false);
    const {t} = useTranslation()
    const onToggle =  () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                onClick={onToggle}
                them={ButtonThem.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >{collapsed ? '>' : '<'}</Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        them={AppLinkThem.SECONDARY}
                        to={RouterPath.main}
                        className={cls.item}
                    >
                        <HomeIcon className={cls.icon}/>
                        <span className={cls.link}>{t('Главная страница' as any)}</span>
                    </AppLink>
                </div>
                <div>
                    <AppLink
                        them={AppLinkThem.SECONDARY}
                        to={RouterPath.about}
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>{t('О сайте' as any)}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.swithers}>
                <ThemSwither/>
                <LangSwither short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;