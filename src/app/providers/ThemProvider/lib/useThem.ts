import {LOCAL_STORAGE_THEME_KEY, Them, ThemContext} from "./ThemContext";
import {useContext} from "react";


interface UseThemResult {
    toggleThem: () => void;
    them: Them
}

export function useThem(): UseThemResult {
    const {them,setThem} = useContext(ThemContext)
    const toggleThem = () =>{
        const newThem =  them === Them.LIGHT ? Them.DARK : Them.LIGHT
        setThem(newThem)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThem)
    }

    return {them, toggleThem}
}