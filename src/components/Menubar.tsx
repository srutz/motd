import { cn } from "../lib/utils";

export function Menubar({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <div className={cn("flex gap-2 items-center px-4 py-3 border-b border-gray-200", className)}>
      {children}
    </div>
  )
}