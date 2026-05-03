import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * utility function for conditionally joining classNames together
 * use like this: cn("class1", condition && "class2", "class3")
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
