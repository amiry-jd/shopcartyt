import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function urlFor(source: string) {
  return `https://cdn.sanity.io/images/8v0j3q4h/production/${source}`;
}
