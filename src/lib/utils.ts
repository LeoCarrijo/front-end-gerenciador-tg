import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateToast(message: string, success?: boolean) {
  if (success == undefined) toast(message)
  else if (success) toast.success(message, {style: {backgroundColor: "green", color: "white"}})
  else toast.error(message, {style: {backgroundColor: "red", color: "white"}})
}