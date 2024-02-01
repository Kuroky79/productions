import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import { ReactNode } from "react";
import React from "react";
interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}




export const Modal = ({ className, children,isOpen,onClose }: ModalProps) => {
    const mods: Record<string,boolean> = {
        [cls.opened]: isOpen,
    }
    const closeHandler = () =>{
        if(onClose){
            onClose()
        }
    }

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={classNames(cls.content, {[cls.contentOpened]: isOpen})} onClick={contentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
