import { useEffect, useState, type CSSProperties, type ReactNode } from "react"

export function App() {
  console.log("Render App")
  return (
    <div title="App">
      <Red><div>Ich bin rot</div></Red>
    </div>
  )
}

export function Red(props: { children?: ReactNode}) {
  return (
    <div style={{ background: "red "}} >
      {props.children}
    </div>
  )
}





