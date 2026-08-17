"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cafe } from "@/data/cafe";

const contactItems = [
    {
        icon: MapPin,
        label: "Find us",
        content: (
            <>
                <span>{cafe.address.line1}</span>
                <span>{cafe.address.line2}</span>
            </>
        ),
    },
    {
        icon: Clock3,
        label: "Opening hours",
        content: (
            <>
                <span>Mon — Fri · {cafe.hours.weekdays}</span>
                <span>Sat — Sun · {cafe.hours.weekends}</span>
            </>
        ),
    },
    {
        icon: Phone,
        label: "Call us",
        content: <span>{cafe.contact.phone}</span>,
        href: `tel:${cafe.contact.phone.replace(/\s/g, "")}`,
    },
    {
        icon: Mail,
        label: "Email",
        content: <span>{cafe.contact.email}</span>,
        href: `mailto:${cafe.contact.email}`,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="
        overflow-hidden
        bg-[var(--cream-light)]
        px-5 py-20
        sm:px-8 sm:py-28
        lg:px-12 lg:py-36
      "
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Come say hello"
                    title={
                        <>
                            Your next
                            <br />
                            <span className="italic text-[var(--caramel)]">
                                favourite corner.
                            </span>
                        </>
                    }
                    description="Whether you're here for your morning coffee or a long afternoon conversation, we'd love to have you."
                />

                <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Contact information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
              rounded-[2rem]
              bg-[var(--coffee)]
              p-7
              text-[var(--cream-light)]
              sm:p-9
            "
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-[#d8b9a1]">
                            {cafe.name}
                        </p>

                        <h3 className="mt-4 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                            Let's make your day a little warmer.
                        </h3>

                        <div className="mt-10 space-y-7">
                            {contactItems.map((item) => {
                                const Icon = item.icon;

                                const content = (
                                    <div className="flex gap-4">
                                        <div
                                            className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-white/10
                      "
                                        >
                                            <Icon size={17} strokeWidth={1.5} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-[#c9a994]">
                                                {item.label}
                                            </p>

                                            <div className="mt-1 flex flex-col text-sm leading-6 text-[#f6e9dc]">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                );

                                if (item.href) {
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="block transition-opacity hover:opacity-70"
                                        >
                                            {content}
                                        </a>
                                    );
                                }

                                return (
                                    <div key={item.label}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Instagram */}
                        <div className="mt-10 border-t border-white/10 pt-7">
                            <a
                                href={cafe.social.instagram}
                                className="
                  inline-flex items-center gap-2
                  text-sm
                  text-[#f6e9dc]
                  transition-opacity
                  hover:opacity-70
                "
                            >
                                <span className="text-base leading-none">◎</span>

                                Follow along on Instagram

                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Map + form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid gap-5 sm:grid-cols-2"
                    >
                        {/* Map */}
                        <div
                            className="
                relative
                min-h-[300px]
                overflow-hidden
                rounded-[2rem]
                bg-[#e6d1bc]
                sm:min-h-full
              "
                        >
                            <div
                                className="
                  absolute inset-0
                  opacity-50
                  [background-image:linear-gradient(var(--coffee)_1px,transparent_1px),linear-gradient(90deg,var(--coffee)_1px,transparent_1px)]
                  [background-size:40px_40px]
                "
                            />

                            <div
                                className="
                  absolute left-1/2 top-1/2
                  flex h-16 w-16
                  -translate-x-1/2 -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  bg-[var(--coffee)]
                  text-[var(--cream-light)]
                  shadow-xl
                "
                            >
                                <MapPin size={25} />
                            </div>

                            <div
                                className="
                  absolute bottom-4 left-4 right-4
                  rounded-2xl
                  bg-[rgba(255,250,242,0.92)]
                  p-4
                  backdrop-blur-sm
                "
                            >
                                <p className="text-xs font-medium text-[var(--coffee)]">
                                    {cafe.address.line1}
                                </p>

                                <p className="mt-1 text-[10px] text-[var(--brown-muted)]">
                                    {cafe.address.line2}
                                </p>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div
                            className="
                rounded-[2rem]
                border border-[var(--line)]
                bg-[var(--cream)]
                p-6
                sm:p-8
              "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brown-muted)]">
                                Get in touch
                            </p>

                            <h3 className="mt-3 font-serif text-2xl text-[var(--coffee)]">
                                Have something to say?
                            </h3>

                            <form className="mt-7 space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-xs text-[var(--brown-muted)]"
                                    >
                                        Your name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="
                      w-full
                      rounded-xl
                      border border-[var(--line)]
                      bg-[var(--cream-light)]
                      px-4 py-3
                      text-sm
                      text-[var(--coffee)]
                      outline-none
                      placeholder:text-[var(--brown-muted)]/60
                      focus:border-[var(--coffee)]
                    "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-xs text-[var(--brown-muted)]"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="hello@example.com"
                                        className="
                      w-full
                      rounded-xl
                      border border-[var(--line)]
                      bg-[var(--cream-light)]
                      px-4 py-3
                      text-sm
                      text-[var(--coffee)]
                      outline-none
                      placeholder:text-[var(--brown-muted)]/60
                      focus:border-[var(--coffee)]
                    "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-xs text-[var(--brown-muted)]"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Tell us what's on your mind..."
                                        className="
                      w-full
                      resize-none
                      rounded-xl
                      border border-[var(--line)]
                      bg-[var(--cream-light)]
                      px-4 py-3
                      text-sm
                      text-[var(--coffee)]
                      outline-none
                      placeholder:text-[var(--brown-muted)]/60
                      focus:border-[var(--coffee)]
                    "
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="
                    group
                    flex w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[var(--coffee)]
                    px-5 py-3.5
                    text-sm
                    font-medium
                    text-[var(--cream-light)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                                >
                                    Send message

                                    <ArrowUpRight
                                        size={16}
                                        className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                                    />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}