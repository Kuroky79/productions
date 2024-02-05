import {createContext} from "react";

export enum Them {
    LIGHT="app_normal_them",
    DARK="app_dark_them",
}


export interface ThemeContentProps {
    them: Them;
    setThem: (them: Them) => void;
}
export const ThemContext = createContext<ThemeContentProps | undefined>(undefined);

export const LOCAL_STORAGE_THEME_KEY = 'them';