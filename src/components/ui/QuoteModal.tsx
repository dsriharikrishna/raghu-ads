"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { closeQuoteModal } from "@/store/slices/uiSlice";
import { WHATSAPP_URL } from "@/lib/utils";

const services = [
    "Flex Printing", "Vinyl Printing", "Hoarding Boards",
    "Lighting Boards", "Star Flex", "Stickers",
    "Posters", "Invitations", "Visiting Cards",
];

interface FormValues {
    name: string;
    phone: string;
    service: string;
    message: string;
}

export default function QuoteModal() {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((s) => s.ui.quoteModalOpen);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        const msg = encodeURIComponent(
            `Hello Raghu Ads! I need a quote.\n\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message}`
        );
        window.open(`https://wa.me/919490366294?text=${msg}`, "_blank");
        reset();
        dispatch(closeQuoteModal());
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[150] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => dispatch(closeQuoteModal())}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-card border border-border rounded-2xl w-full max-w-md overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 40 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="bg-primary px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="font-display text-2xl text-black tracking-wide">GET INSTANT QUOTE</h2>
                                <p className="text-black/70 text-xs font-medium">We reply within minutes via WhatsApp</p>
                            </div>
                            <button
                                onClick={() => dispatch(closeQuoteModal())}
                                className="text-black/70 hover:text-black transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Enter your name"
                                    className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:border-primary focus:outline-none transition-colors"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                                    Phone Number
                                </label>
                                <input
                                    {...register("phone", { required: "Phone is required" })}
                                    placeholder="Your WhatsApp number"
                                    type="tel"
                                    className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:border-primary focus:outline-none transition-colors"
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                                    Service Required
                                </label>
                                <select
                                    {...register("service", { required: "Please select a service" })}
                                    className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    {services.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {errors.service && (
                                    <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    placeholder="Describe your printing requirements..."
                                    rows={3}
                                    className="w-full bg-black border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:border-primary focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
                            >
                                <Send size={16} />
                                Send via WhatsApp
                            </motion.button>

                            <p className="text-center text-white/30 text-xs">
                                Or call us:{" "}
                                <a href="tel:9490366294" className="text-primary hover:underline">
                                    9490366294
                                </a>
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
