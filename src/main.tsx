import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router'
import { LuSatellite } from 'react-icons/lu'

const rootElement = document.getElementById('root')!
const reactRoot = createRoot(rootElement)

const router = createBrowserRouter([
    { path: "/", element: <Frame/>, children: [
        { path: "/", element: <App/> },
        { path: "/about", element: <div>About1</div> },
        { path: "/imprint", element: <div>Alles legal hier</div> },
    ] },
    { path: "*", element: <div>Fallback route</div> },
])

reactRoot.render(
    <RouterProvider router={router} />
)

function Frame() { return (
    <div className="w-screen h-screen flex flex-col">
        <Menubar/>
        <div className="h-1 p-4 grow bg-white overflow-y-auto" >
            <Outlet></Outlet>
        </div>
    </div>
)}

function Menubar() { return (
    <div className="px-4 py-2 border-b border-gray-300 flex items-center gap-4">
        <LuSatellite size={25}></LuSatellite><span className="font-bold mr-8">Product-App</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/imprint">Imprint</NavLink>
    </div>
)}