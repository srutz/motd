import { LuSatellite } from "react-icons/lu"
import { NavLink } from "react-router"
import { counterAtom } from "./atoms"
import { useAtomValue } from "jotai"

export function Menubar() {
    const count = useAtomValue(counterAtom)
    return (
    <div className="px-4 py-2 border-b border-gray-300 flex items-center gap-4">
        <LuSatellite size={25}></LuSatellite><span className="font-bold mr-8">Product-App</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/imprint">Imprint</NavLink>
        <div>Count = {count}</div>
    </div>
)}