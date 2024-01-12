import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Them, ThemContext} from "./ThemContext";


const defaultThem = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Them || Them.LIGHT;
const ThemProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [them, setThem] = useState<Them>(defaultThem)

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