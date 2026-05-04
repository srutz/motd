import { useEffect, useState } from "react";
import type { Product } from "./types";

export function useProduct(id: number) {
    const [ product, setProduct] = useState<Product|null>(null)
    useEffect(() => {
        (async () => {
            const resp = await fetch("https://dummyjson.com/products/" + id)
            const json = await resp.json()
            setProduct(json);
        })()

    }, [id])
    return { data: product }

}