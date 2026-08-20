"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { cafe } from "@/data/cafe";

export default function Hero() {
    return (
        <section
            id="home"
            className="
                relative flex min-h-[92svh]
                items-center overflow-hidden
                px-5 pb-16 pt-28
                sm:px-8
                lg:min-h-screen lg:px-12
            "
        >
            {/* Decorative background shapes */}
            <div
                className="
                    pointer-events-none absolute
                    -right-24 top-24
                    h-64 w-64 rounded-full
                    bg-[var(--caramel)]/10
                    blur-3xl
                    sm:h-96 sm:w-96
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -bottom-20 -left-20
                    h-56 w-56 rounded-full
                    bg-[var(--coffee)]/5
                    blur-3xl
                "
            />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                {/* Hero content */}
                <div className="max-w-2xl">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[var(--caramel)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--brown-muted)]">
                            Welcome to {cafe.name}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="
                            font-serif
                            text-5xl leading-[0.95]
                            tracking-[-0.04em]
                            text-[var(--coffee)]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[clamp(4.5rem,7vw,7rem)]
                        "
                    >
                        Good coffee.
                        <br />

                        <span className="italic text-[var(--caramel)]">
                            Slow moments.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="
                            mt-7 max-w-md
                            text-sm leading-7
                            text-[var(--brown-muted)]
                            sm:text-base
                        "
                    >
                        {cafe.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href="#menu"
                            className="
                                group flex items-center gap-3
                                rounded-full
                                bg-[var(--coffee)]
                                px-6 py-3.5
                                text-sm font-medium
                                text-[var(--cream-light)]
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            Explore our menu

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:rotate-45"
                            />
                        </a>

                        <a
                            href="#about"
                            className="
                                rounded-full
                                border border-[var(--line)]
                                px-6 py-3.5
                                text-sm
                                text-[var(--coffee)]
                                transition-all duration-300
                                hover:border-[var(--coffee)]
                            "
                        >
                            Our story
                        </a>
                    </motion.div>
                </div>

                {/* Hero image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-md lg:max-w-lg"
                >

                    {/* Decorative ring */}
                    <div
                        className="
                            absolute left-1/2 top-1/2
                            aspect-square w-[88%]
                            -translate-x-1/2 -translate-y-1/2
                            rounded-full
                            border border-[var(--coffee)]/10
                        "
                    />

                    {/* Main image card */}
                    <div
                        className="
        relative mx-auto
        aspect-square
        w-[82%]
        overflow-hidden
        rounded-full
        bg-[var(--coffee)]
        shadow-[0_30px_70px_rgba(90,48,34,0.2)]
    "
                    >

                        {/* Your image */}
                        <Image
                            src="/images/logo.png"
                            alt={`${cafe.name} cafe`}
                            fill
                            priority
                            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 40vw"
                            className="
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                hover:scale-105
                            "
                        />

                        {/* Soft image overlay */}
                        <div
                            className="
                                absolute inset-0
                                bg-gradient-to-t
                                from-[rgba(45,25,18,0.45)]
                                via-transparent
                                to-transparent
                            "
                        />


                    </div>

                    {/* Floating note */}
                    <motion.div
                        animate={{ y: [0, -7, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            absolute
                            -left-2 top-10
                            rounded-2xl
                            bg-[var(--cream-light)]
                            px-4 py-3
                            shadow-[0_15px_35px_rgba(90,48,34,0.12)]
                            sm:-left-5
                        "
                    >
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--brown-muted)]">
                            Made with
                        </p>

                        <p className="mt-1 font-serif text-sm text-[var(--coffee)]">
                            a little love
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="
                    absolute bottom-5 left-1/2
                    hidden -translate-x-1/2
                    items-center gap-2
                    text-[10px] uppercase
                    tracking-[0.2em]
                    text-[var(--brown-muted)]
                    sm:flex
                "
            >
                Scroll

                <ArrowDown size={13} />
            </motion.a>
        </section>
    );
}