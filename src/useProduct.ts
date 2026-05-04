import { useEffect, useState } from "react";
import { type Product } from "./types";
import { useQuery } from "@tanstack/react-query";

export async function getProduct(id: number) {
    const resp = await fetch("https://dummyjson.com/products/" + id)
    const json = await resp.json();
    return json as Product;
}

// useproduct mit tanstack-query
export function useProduct(id: number) {
    return useQuery({
        queryKey: [ "product", id],
        queryFn: async () => getProduct(id),
        staleTime: 1800_000,
        placeholderData: data => data
    })
}

// product manuell laden
export function useProduct____(id: number) {
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