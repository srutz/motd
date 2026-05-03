import type { ReactNode } from "react";
import { cn } from "../lib/utils";

/*
 * a custom button component that can be used throughout the app
 */
export function Button({ className, onClick, children }: { className?: string, onClick: () => void; children: ReactNode }) {
  return (
    <button className={cn("bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded cursor-pointer transition-colors", className)} onClick={onClick}>
      {children}
    </button>
  )
}