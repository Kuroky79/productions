import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Them, ThemContext} from "../lib/ThemContext";



const defaultThem = Them.DARK || localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Them;
console.log(defaultThem)
interface ThemProviderProps {
    initialThem?: Them;
    children: React.ReactNode
}

const ThemProvider: FC<ThemProviderProps> = (props) => {
    const {initialThem
        ,children} = props;
    const [them, setThem] = useState<Them>(initialThem || defaultThem)
    const defaultProps = useMemo(() => ({
        them: them,
        setThem: setThem,
    }),[them])
    return (
        <ThemContext.Provider value={defaultProps}>
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProvider;