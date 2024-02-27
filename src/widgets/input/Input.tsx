import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, ChangeEvent } from "react";
import React, { ChangeEventHandler } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>

            <Input type={type} value={value} onChange={onChangeHandler} {...otherProps} />
        </div>
    );
});

export default Input;
