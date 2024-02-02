import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Modal from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import Button, {ButtonThem} from "shared/ui/Button/Button";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(()=>{
        setIsAuthModal(prev => !prev)
    },[])
    const {t} = useTranslation();
    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModal} them={ButtonThem.CLEAR_INVERTED} className={cls.links}>
                {t('Войти' as any)}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                DGFHDGHHHHHHHHHHHHHHHHHHHHHHDGHDGH
            </Modal>
        </div>
    );
};

export default Navbar;
