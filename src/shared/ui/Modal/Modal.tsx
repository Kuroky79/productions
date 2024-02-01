import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {ReactNode, useRef, useState} from "react";
import React from "react";
interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


const ANIMATION_DELAY = 300;

export const Modal = ({ className, children,isOpen,onClose }: ModalProps) => {
    const mods: Record<string,boolean> = {
        [cls.opened]: isOpen,
    }

    const closeHandler = () =>{
        if(onClose){
            onClose()
            timerRef.current = setTimeout(()=>{
                onClose();
            },ANIMATION_DELAY)
        }
    }
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<NodeJS.Timeout>();
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
