import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function Dialog({ open, onClose, children, title, description, className }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => {
        // Close if clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className={cn(
          "relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6",
          "flex flex-col gap-4",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
        aria-describedby={description ? "dialog-description" : undefined}
      >
        {/* Header */}
        {(title || description) && (
          <div className="flex flex-col gap-1">
            {title && (
              <h2 id="dialog-title" className="text-lg font-semibold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <p id="dialog-description" className="text-sm text-gray-500">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}
