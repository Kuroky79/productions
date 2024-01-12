import {createContext} from "react";

export enum Them {
    LIGHT="normal",
    DARK="dark",
}


export interface ThemeContentProps {
    them: Them;
    setThem: (them: Them) => void;
}
export const ThemContext = createContext<ThemeContentProps | undefined>(undefined);

export const LOCAL_STORAGE_THEME_KEY = 'them';