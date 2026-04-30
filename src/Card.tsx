import { useState, type ReactNode } from "react"
import { LuTriangle } from "react-icons/lu"

export 
function Card({ children, title, description}
    : { children?: ReactNode, expanded?: boolean, 
        title?: string, description?: string}) 
{
    const [ expanded, setExpanded ] = useState(!false)
    const triangleClasses = (expanded ? "rotate-180" : "rotate-90")
    console.log(triangleClasses)
    return (
        <div className="borderbox">
            <div className="flex flex-col gap-1">{/* layout von links nach rechts */}
                <div className="flex gap-1 items-center">
                    <button onClick={() => setExpanded(!expanded)} >
                        <LuTriangle size={9} className={triangleClasses}/>
                    </button>
                    <div className="text-gray-500 text-xs font-bold">{title}</div>
                </div>
                <div className="flex flex-col gap-1 ml-3">
                    {expanded && <div className="text-gray-400 text-xs mb-2">
                        {description}
                    </div>}
                    {expanded && children}
                </div>
            </div>
        </div>
    )
}