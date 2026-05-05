import { LuSatellite, LuShoppingBasket } from "react-icons/lu"
import { NavLink } from "react-router"
import { useCart } from "./Cart";

export function Menubar() {
    const { totalPrice } = useCart();
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return (
    <div className="px-4 py-2 border-b border-gray-300 flex items-center gap-4">
        <LuSatellite size={25}></LuSatellite><span className="font-bold mr-8">Product-App</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/imprint">Imprint</NavLink>
        <div className="grow"></div>
        <div className="relative">
            <LuShoppingBasket size={22}></LuShoppingBasket>
            <div className="p-1 text-xs top-[16px] left-[-32px] absolute h-8 bg-red-300 rounded-full
                    flex flex-col justify-center items-center">
                {priceFormatter.format(totalPrice())}
            </div>
        </div>
    </div>
)}