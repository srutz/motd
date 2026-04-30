import { type ReactNode } from "react"
import { LuTriangle } from "react-icons/lu"

export 
function Card({ expanded, children, title, description}
    : { children?: ReactNode, expanded?: boolean, 
        title?: string, description?: string}) 
{
    const triangleClasses = "mt-1 " + (expanded ? "rotate-180" : "rotate-90")
    console.log(triangleClasses)
    return (
        <div className="borderbox">
            <div className="flex gap-1">{/* layout von links nach rechts */}
                <LuTriangle size={9} className={triangleClasses}/>
                <div className="flex flex-col gap-1">
                    <div className="text-gray-500 text-xs font-bold">{title}</div>
                    {expanded && <div className="text-gray-400 text-xs mb-2">
                        {description}
                    </div>}
                    {expanded && children}
                </div>
            </div>
        </div>
    )
}