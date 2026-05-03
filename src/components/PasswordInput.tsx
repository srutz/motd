import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { cn } from "../lib/utils";

interface PasswordInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
}

export function PasswordInput({
  placeholder = "Password",
  value,
  onChange,
  className,
  name,
  id,
  autoComplete,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        name={name}
        id={id}
        autoComplete={autoComplete}
        className={cn(
          "border border-gray-300 p-2 pr-10 rounded w-full",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
      </button>
    </div>
  );
}
