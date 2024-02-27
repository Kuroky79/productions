import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/Button";
import React from "react";
import Input from "widgets/input/Input";
interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input}/>
            <Input type="text" className={cls.input}/>
            <Button className={cls.loginBtn}>
                {t('Войти' as any)}
            </Button>
        </div>
    );
};

export default LoginForm;