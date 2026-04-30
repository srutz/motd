import { useEffect, useState, type ReactNode } from "react"
import { Card } from "./Card"

function Button({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export function App() {
  const [ id, setId] = useState(10)
  const [ quote, setQuote] = useState<Quote|null>(null);
  console.log({ id, quote })
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
    <div title="App" className="flex flex-col gap-1 items-stretch">
      <div className="flex gap-2 mt-1 self-center">
        <Button onClick={() => setId(id - 1)}>Prev</Button>
        <Button onClick={() => setId(id + 1)}>Next</Button>
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

