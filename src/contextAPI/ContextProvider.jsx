import { useEffect, useState } from "react";
import { ContextApi } from "./ContextApi";

export default function ContextProvider({children}){

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
        localStorage.setItem("Theme", JSON.stringify(!isDark));
    }

    useEffect(() => {
        const theme = localStorage.getItem("Theme");
        if(theme){
            setIsDark(JSON.parse(theme));
        }
    }, [])




    return(<ContextApi.Provider value={{isDark, toggleTheme}}>
        {children}
    </ContextApi.Provider>)
}