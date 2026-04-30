import { useEffect, useState } from "react"
import { Card } from "./Card"

export function App() {
  const [ id, setId] = useState(10)
  const [ quote, setQuote] = useState<Quote|null>(null);
  console.log("render", quote)
  useEffect(() => {    
    (async () => { 
     const quote = await getQuote(id)
     setQuote(quote)
    })()
  }, [id])
  if (!quote) {
    return null
  }
  return (
    <div title="App">
      <div className="flex gap-2">
        <button className="button" onClick={() => setId(id - 1)}>Prev</button>
        <button className="button" onClick={() => setId(id + 1)}>Next</button>
      </div>
      <Card
        title={"Zitat " + quote.id}
        description={quote.author}
        >
        <div>{quote.quote}</div>
      </Card>
    </div>
  )
}

export type Quote = { id: number; quote: string; author: string  }

async function getQuote(id: number) {
  const resp = await fetch("https://dummyjson.com/quotes/" + encodeURIComponent(id))
  const data: Quote = await resp.json()
  return data
}

