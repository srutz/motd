import { Outlet } from "react-router";
import { Menubar } from "./Menubar";

export function Frame() { return (
    <div className="w-screen h-screen flex flex-col">
        <Menubar/>
        <main className="p-4 h-1 grow bg-white overflow-y-auto" >
            <Outlet></Outlet>
        </main>
    </div>
)}


