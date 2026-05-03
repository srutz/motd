import { cn } from "../lib/utils";
import { PageTitle } from "./PageTitle";

export function PageWrapper({ className, children, title }: { className?: string, title: string, children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <PageTitle>{title}</PageTitle>
      <div className={cn("flex flex-col gap-2 items-center", className)}>
        {children}
      </div>
    </div >
  )
}
