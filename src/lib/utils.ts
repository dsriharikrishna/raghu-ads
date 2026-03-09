import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
    return phone.replace(/(\d{5})(\d{5})/, "$1 $2");
}

// Re-export contact constants from the single source of truth
export {
    PHONE_1,
    PHONE_2,
    EMAIL,
    INSTAGRAM,
    INSTAGRAM_URL,
    ADDRESS,
    WHATSAPP_NUMBER,
    WHATSAPP_URL,
} from "@/data/contact";
