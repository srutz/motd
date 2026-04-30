import { type ReactNode } from "react"
import { FaArrowRight } from "react-icons/fa"
import { LuAirVent } from "react-icons/lu"

export 
function Card({ expanded, children, title = "Titel 123"}
    : { children?: ReactNode, expanded?: boolean, title?: string }) 
{
    return (
        <div className="borderbox">
            {expanded ? <FaArrowRight></FaArrowRight> : <LuAirVent />}
            <div className="text-gray-500 text-xs">{title}</div>
            {expanded && children}
        </div>
    )
}