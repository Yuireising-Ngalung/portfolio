import { useContext } from "react";
import { FaCloudSun, FaPerson, FaSun, FaUser } from "react-icons/fa6";
import { ContextApi } from "../contextAPI/ContextApi";

export default function Header(){
    const {isDark,toggleTheme} = useContext(ContextApi);
    return(<section 
            className="sticky top-5 z-50  w-full bg-white/5 backdrop-blur-sm flex justify-between items-center shadow-2xs py-2 px-5 rounded-full ">
        <h1 className="font-bold uppercase tracking-widest">Portfolio</h1>
        <button className="p-2 rounded-full border-2" onClick={toggleTheme}>
            {
                isDark
                ?
                    <FaSun />
                :
                    <FaCloudSun />
            }
        </button> 
    </section>)
}