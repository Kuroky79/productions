import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'
import LoginForm from "../LoginForm/LoginForm";
import Modal from "shared/ui/Modal/Modal";
import React from "react";
interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({className,isOpen,onClose}: LoginModalProps) => {
    return (
        <Modal isOpen={isOpen}   onClose={onClose}     className={classNames(cls.LoginModal,{},[className])}>
            <LoginForm/>
        </Modal>
    );
};

export default LoginModal;