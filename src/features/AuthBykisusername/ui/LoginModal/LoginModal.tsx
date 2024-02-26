import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string;
}

export const LoginModal = ({className}: LoginModalProps) => {
    return (
        <Modal className={classNames(cls.LoginModal,{},[className])}>
          
        </Modal>
    );
};

export default LoginModal;