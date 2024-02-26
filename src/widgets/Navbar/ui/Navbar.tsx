import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Modal from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import Button, {ButtonThem} from "shared/ui/Button/Button";
import LoginModal from "features/AuthBykisusername/ui/LoginModal/LoginModal";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(()=>{
        setIsAuthModal(false)
    },[])
    const onShowModal = useCallback(()=>{
        setIsAuthModal(true)
    },[])
    const {t} = useTranslation();
    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onShowModal} them={ButtonThem.CLEAR_INVERTED} className={cls.links}>
                {t('Войти' as any)}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};

export default Navbar;
