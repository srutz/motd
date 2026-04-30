import { type ReactNode } from "react"

export 
function Card(props: { children?: ReactNode, expanded?: boolean }) {
    return (
        <div className="borderbox">
            {props.children}
        </div>
    )
}