import { useCart } from "./Cart";

export function CartPage() {
    const { items, totalPrice, modifyQuantity, remove } = useCart()
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <CartView 
                items={items} 
                totalPrice={totalPrice()} 
                onQuantityChange={modifyQuantity}
                onRemove={remove}
            />
        </div>
    )
}

function CartView({ items, totalPrice, onQuantityChange, onRemove }: { 
    items: Array<{ id: number; quantity: number; price: number }>,
    totalPrice: number,
    onQuantityChange: (id: number, quantity: number) => void,
    onRemove: (id: number) => void
}) {
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-12 text-center">
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Your Cart is Empty</h2>
                <p className="text-zinc-600 text-lg">Add some products to get started!</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-zinc-200">
                <h1 className="text-4xl font-bold text-zinc-900">Shopping Cart</h1>
                <p className="text-zinc-600 mt-2">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-zinc-200">
                {items.map((item) => (
                    <div key={item.id} className="px-8 py-6 hover:bg-zinc-50 transition-colors">
                        <div className="flex items-center justify-between gap-6">
                            {/* Item Info */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                                    Product #{item.id}
                                </h3>
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-green-600">
                                        {priceFormatter.format(item.price)}
                                    </span>
                                    <span className="text-zinc-500">per item</span>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                                    className="w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center font-bold text-xl transition-colors"
                                >
                                    −
                                </button>
                                <span className="text-2xl font-semibold text-zinc-900 w-12 text-center">
                                    {item.quantity}
                                </span>
                                <button 
                                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                                    className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center font-bold text-xl transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal */}
                            <div className="text-right min-w-[120px]">
                                <div className="text-sm text-zinc-500 mb-1">Subtotal</div>
                                <div className="text-2xl font-bold text-zinc-900">
                                    {priceFormatter.format(item.price * item.quantity)}
                                </div>
                            </div>

                            {/* Remove Button */}
                            <button 
                                onClick={() => onRemove(item.id)}
                                className="px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-semibold transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary Section */}
            <div className="border-t border-zinc-200 bg-zinc-50">
                <div className="px-8 py-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900">Total</h2>
                            <p className="text-zinc-600 text-sm mt-1">Including all items in cart</p>
                        </div>
                        <div className="text-5xl font-bold text-green-600">
                            {priceFormatter.format(totalPrice)}
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg">
                            Proceed to Checkout
                        </button>
                        <button className="px-8 py-4 rounded-xl border-2 border-zinc-300 hover:border-zinc-400 font-semibold text-zinc-700 transition-colors">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

