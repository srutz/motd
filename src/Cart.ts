import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = { id: number; quantity: number; price: number }

type CartStore = {
    items:          CartItem[]
    add:            (item: CartItem) => void
    remove:         (id: number) => void
    modifyQuantity: (id: number, quantity: number) => void
    clear:          () => void
    totalPrice:     () => number
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            add: (item) =>
                set(state => ({ items: [...state.items, item] })),
            remove: (id) =>
                set(state => ({ items: state.items.filter(i => i.id !== id) })),
            modifyQuantity: (id, quantity) =>
                set(state => ({
                    items: quantity <= 0
                        ? state.items.filter(i => i.id !== id)
                        : state.items.map(i => i.id === id ? { ...i, quantity } : i),
                })),
            clear: () => set({ items: [] }),
            totalPrice: () =>
                get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
        }),
        {
            name: "cart-storage",
        }
    )
)