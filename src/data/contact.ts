// ─── Contact & Business Information ───────────────────────────────────────────
export const COMPANY_NAME = "Raghu Ads";
export const COMPANY_TAGLINE = "Digital Ads & Flex Printing";
export const COMPANY_DESCRIPTION =
    "Raghu Ads is a professional digital printing service offering high quality flex printing, vinyl banners, hoardings, and advertising materials for businesses, political campaigns, and events. Located at Devarakadra, we serve clients across the region with exceptional quality and reliable delivery.";

export const PHONE_1 = "9490366294";
export const PHONE_2 = "9603720294";
export const EMAIL = "raghuadsdvk@gmail.com";
export const INSTAGRAM = "raghu_ads";
export const ADDRESS = "Veerappaiah Complex, Shop No.7, Raichur Road, Devarakadra";

export const WHATSAPP_NUMBER = "919490366294";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Raghu%20Ads!%20I%20need%20a%20quote%20for%20printing%20services.`;
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM}`;

export const contactDetails = [
    {
        id: "address",
        icon: "MapPin",
        label: "Address",
        value: ADDRESS,
        link: null as string | null,
    },
    {
        id: "phone",
        icon: "Phone",
        label: "Phone",
        value: `${PHONE_1} / ${PHONE_2}`,
        link: `tel:${PHONE_1}`,
    },
    {
        id: "email",
        icon: "Mail",
        label: "Email",
        value: EMAIL,
        link: `mailto:${EMAIL}`,
    },
    {
        id: "instagram",
        icon: "Instagram",
        label: "Instagram",
        value: `@${INSTAGRAM}`,
        link: INSTAGRAM_URL,
    },
];
