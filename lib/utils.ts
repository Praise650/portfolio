import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// utils/paths.js
export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${path}`;
};

// You can also add other utility functions here
export const getAssetPath = (path: string) => {
  return getImagePath(path); // Same logic, different name if you prefer
};