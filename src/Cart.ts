import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

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
        immer((set, get) => ({
            items: [],
            add: (item) =>
                set(state => {
                    state.items.push(item)
                }),
            remove: (id) =>
                set(state => {
                    const index = state.items.findIndex(i => i.id === id)
                    if (index !== -1) state.items.splice(index, 1)
                }),
            modifyQuantity: (id, quantity) =>
                set(state => {
                    const item = state.items.find(i => i.id === id)
                    if (item) {
                        if (quantity <= 0) {
                            const index = state.items.findIndex(i => i.id === id)
                            if (index !== -1) state.items.splice(index, 1)
                        } else {
                            item.quantity = quantity
                        }
                    }
                }),
            clear: () => set(state => { state.items = [] }),
            totalPrice: () =>
                get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
        })),
        {
            name: "cart-storage",
        }
    )
)