import { useState } from "react"
import { Card } from "./Card"

export function App() {
  const [ expanded, setExpanded ] = useState(false)
  return (
    <div title="App">
      <Card expanded={expanded}
        title={"Informationsblock"}
        description="Aktuelle Informationen bitte auf Blitzer achten."
        >
          <div>Ich bin rot</div>
      </Card>
      <button onClick={() => setExpanded(!expanded)}>Toggle</button>
    </div>
  )
}







