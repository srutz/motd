import { useState, type ReactNode } from "react"
import { LuTriangle } from "react-icons/lu"

export 
function Card({ children, title, description}
    : { children?: ReactNode, expanded?: boolean, 
        title?: string, description?: string}) 
{
    const [ expanded, setExpanded ] = useState(!false)
    return (
    <div className="borderbox">
        <div className="flex flex-col gap-1">{/* layout von links nach rechts */}
            <CardHeader expanded={expanded} setExpanded={setExpanded}>
                {title}
            </CardHeader>
            <CardContent>
                {expanded && <div className="text-gray-400 text-xs mb-2">
                    {description}
                </div>}
                {expanded && children}
            </CardContent>
        </div>
    </div>
    )
}

function CardContent({children} : { children?: ReactNode}) {
    return (
        <div className="flex flex-col gap-1 ml-3">
            {children}
        </div>
    )
}

function CardHeader({ children, expanded, setExpanded } 
    : { children?: ReactNode, expanded: boolean, setExpanded: (e: boolean) => void}) {
    const triangleClasses = (expanded ? "rotate-180" : "rotate-90")
    return (
        <div className="flex gap-1 items-center">
            <button onClick={() => setExpanded(!expanded)} >
                <LuTriangle size={9} className={triangleClasses}/>
            </button>
            <div className="text-gray-500 text-xs font-bold">{children}</div>
        </div>        
    )
}