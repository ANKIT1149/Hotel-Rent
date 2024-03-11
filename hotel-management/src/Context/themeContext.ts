import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>
}





const themeContext = createContext