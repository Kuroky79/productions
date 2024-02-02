import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import React from "react";
interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


const ANIMATION_DELAY = 300;

export const Modal = ({ className, children,isOpen,onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<NodeJS.Timeout>();


    const mods: Record<string,boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const closeHandler = useCallback(() =>{
        if(onClose){
            setIsClosing(true)
            timerRef.current = setTimeout(()=>{
                onClose();
                setIsClosing(false)
            },ANIMATION_DELAY)
        }
    },[onClose])
    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    const onkeydown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler();
        }
    },[closeHandler])
    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onkeydown)
        }
        return () =>{
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onkeydown)
        }
    }, [isOpen, onkeydown]);
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
