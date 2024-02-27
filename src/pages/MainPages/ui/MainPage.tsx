import React, {ChangeEvent, useState} from 'react';
import {useTranslation} from "react-i18next";

import Input from "widgets/input/Input";


const MainPage = () => {
    const [value,setValue] = useState('')
    const {t} = useTranslation()
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
            <div>
                {t('Главная страница' as any)}
                <Input value={value} onChange={onChange} placeholder="Войти"/>
            </div>
    );
};

export default MainPage;
