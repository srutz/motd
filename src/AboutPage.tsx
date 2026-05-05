import { useLocalStorage } from "@uidotdev/usehooks";
import { atom, useAtom } from "jotai";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { counterAtom } from "./atoms";



export function AboutPage() {
    //const [ count, setCount ] = useState(10);
    //const [ count, setCount ] = useLocalStorage("mycount", 10);
    //const [ count, setCount ] = useQueryState("cnt", parseAsInteger.withDefault(0) );
    const [ count, setCount ] = useAtom(counterAtom);

    useEffect(() => {
        const id = setInterval(() => setCount(count + 1), 500)
        return () => clearInterval(id)
    }, [count, setCount])
    return (
        <div>
            About {count}
        </div>
    )
}