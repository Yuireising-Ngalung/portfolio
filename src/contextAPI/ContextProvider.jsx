import { useEffect, useState } from "react";
import { ContextApi } from "./ContextApi";

export default function ContextProvider({children}){

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }


    return(<ContextApi.Provider value={{isDark, toggleTheme}}>
        {children}
    </ContextApi.Provider>)
}