"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSubmitting, setSuccess, resetForm } from "@/store/slices/formSlice";
import { contactDetails, PHONE_1, WHATSAPP_URL } from "@/data/contact";
import { serviceNames } from "@/data/services";

const iconMap: Record<string, React.ElementType> = { MapPin, Phone, Mail, Instagram };

interface FormValues {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
}

export default function Contact() {
    const dispatch = useAppDispatch();
    const formState = useAppSelector((s) => s.form);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        dispatch(setSubmitting());
        await new Promise((r) => setTimeout(r, 1000));
        const msg = encodeURIComponent(
            `Hello Raghu Ads!\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage: ${data.message}`
        );
        window.open(`https://wa.me/919490366294?text=${msg}`, "_blank");
        dispatch(setSuccess());
        reset();
        setTimeout(() => dispatch(resetForm()), 4000);
    };

    return (
        <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center gap-2 text-[#FFD600] text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-8 h-0.5 bg-[#FFD600]" />Get In Touch<span className="w-8 h-0.5 bg-[#FFD600]" />
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-5">CONTACT US</h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto">
                        Ready to start your project? Reach out via form, phone, or WhatsApp.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Contact Info + Map */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">

                        {contactDetails.map((item) => {
                            const Icon = iconMap[item.icon] ?? MapPin;
                            const content = (
                                <div className="flex items-start gap-4 bg-[#111] border border-[#1E1E1E] rounded-xl p-5 hover:border-[#FFD600]/30 transition-all group">
                                    <div className="w-10 h-10 rounded-lg bg-[#FFD600]/10 border border-[#FFD600]/20 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-[#FFD600]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                                        <div className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">{item.value}</div>
                                    </div>
                                </div>
                            );
                            return item.link ? (
                                <a key={item.id} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                    {content}
                                </a>
                            ) : (
                                <div key={item.id}>{content}</div>
                            );
                        })}

                        {/* WhatsApp CTA */}
                        <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-5 hover:bg-green-500/20 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-green-400 font-bold text-sm">WhatsApp Us Directly</div>
                                <div className="text-white/40 text-xs">+91 {PHONE_1} – Click to chat now</div>
                            </div>
                        </motion.a>

                        {/* Google Map */}
                        <div className="rounded-xl overflow-hidden border border-[#1E1E1E] h-48">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30777.123456789!2d77.560413!3d16.668621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc42c6c00000001%3A0x0!2sDevarakadra%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%" height="192" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="Raghu Ads Location" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                        <div className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-7 sm:p-9">
                            <h3 className="font-display text-2xl text-white mb-7 tracking-wide">SEND A MESSAGE</h3>

                            {formState.status === "success" ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16">
                                    <div className="text-5xl mb-4">🎉</div>
                                    <h4 className="font-display text-2xl text-[#FFD600] mb-2">Message Sent!</h4>
                                    <p className="text-white/50 text-sm">We&apos;ve received your message and will reply on WhatsApp shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Name *</label>
                                            <input {...register("name", { required: "Required" })} placeholder="Your name"
                                                className="w-full bg-black border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#FFD600] focus:outline-none transition-colors" />
                                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Phone *</label>
                                            <input {...register("phone", { required: "Required" })} placeholder="Your phone" type="tel"
                                                className="w-full bg-black border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#FFD600] focus:outline-none transition-colors" />
                                            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Email</label>
                                        <input {...register("email")} placeholder="your@email.com" type="email"
                                            className="w-full bg-black border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#FFD600] focus:outline-none transition-colors" />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Service Required</label>
                                        <select {...register("service")}
                                            className="w-full bg-black border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm focus:border-[#FFD600] focus:outline-none transition-colors">
                                            <option value="">Select a service...</option>
                                            {serviceNames.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Message *</label>
                                        <textarea {...register("message", { required: "Required" })}
                                            placeholder="Describe your printing requirements in detail..." rows={5}
                                            className="w-full bg-black border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#FFD600] focus:outline-none transition-colors resize-none" />
                                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                                    </div>

                                    <motion.button type="submit" disabled={formState.status === "submitting"}
                                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        className="w-full bg-[#FFD600] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed">
                                        {formState.status === "submitting" ? (
                                            <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</>
                                        ) : (
                                            <><Send size={18} />Send Message</>
                                        )}
                                    </motion.button>
                                    <p className="text-center text-white/30 text-xs">Your message will be sent via WhatsApp for instant response.</p>
                                </form>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
