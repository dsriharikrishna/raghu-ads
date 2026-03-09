"use client";
import { motion } from "framer-motion";
import { Printer, Phone, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, PHONE_1, PHONE_2, EMAIL, INSTAGRAM, ADDRESS } from "@/lib/utils";

const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];
const services = [
    "Flex Printing", "Vinyl Printing", "Hoarding Boards",
    "Lighting Boards", "Star Flex", "Stickers",
    "Posters", "Invitations", "Visiting Cards",
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNav = (section: string) => {
        const href = `#${section.toLowerCase()}`;
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-black border-t border-border">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-yellow">
                            <Printer className="w-5 h-5 text-black" />
                        </div>
                        <div>
                            <div className="font-display text-xl text-white tracking-wider">RAGHU ADS</div>
                            <div className="text-[9px] text-primary/70 tracking-widest uppercase font-medium">
                                Digital Ads & Flex Printing
                            </div>
                        </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                        Professional digital printing services for businesses, events, and political campaigns. Quality that speaks for itself.
                    </p>
                    {/* Social */}
                    <div className="flex gap-3">
                        <a
                            href={`https://instagram.com/${INSTAGRAM}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:border-primary hover:shadow-yellow-sm transition-all"
                        >
                            <Instagram size={16} />
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-white/50 hover:text-green-500 hover:border-green-500 transition-all"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-display text-lg text-white tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-primary inline-block"></span>
                        QUICK LINKS
                    </h4>
                    <ul className="space-y-2.5">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => handleNav(item)}
                                    className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-1.5 group"
                                >
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-display text-lg text-white tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-primary inline-block"></span>
                        SERVICES
                    </h4>
                    <ul className="space-y-2.5">
                        {services.map((s) => (
                            <li key={s}>
                                <span className="text-white/50 text-sm hover:text-primary transition-colors cursor-default block">
                                    {s}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-display text-lg text-white tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-primary inline-block"></span>
                        CONTACT
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-white/50 text-sm leading-relaxed">{ADDRESS}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                            <div className="text-sm">
                                <a href={`tel:${PHONE_1}`} className="block text-white/50 hover:text-primary transition-colors">
                                    {PHONE_1}
                                </a>
                                <a href={`tel:${PHONE_2}`} className="block text-white/50 hover:text-primary transition-colors">
                                    {PHONE_2}
                                </a>
                            </div>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                            <a href={`mailto:${EMAIL}`} className="text-white/50 hover:text-primary transition-colors text-sm break-all">
                                {EMAIL}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/30 text-sm">
                        © {year} Raghu Ads. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">
                        Digital Ads & Flex Printing – Devarakadra
                    </p>
                </div>
            </div>
        </footer>
    );
}
