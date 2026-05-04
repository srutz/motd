import { useProduct } from "./useProduct"

export function HomePage() {
    const { data: product } = useProduct(18)
    return (
        <div>{product?.title}</div>
    )
}