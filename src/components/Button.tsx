import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";

/*
 * a custom button component that can be used throughout the app
 */
export function Button({ className, onClick, children, ...props }: { className?: string, onClick: () => void; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button
      className={cn("bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded cursor-pointer transition-colors", className)}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  )
}