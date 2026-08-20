"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Heart, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
    {
        icon: Coffee,
        title: "Handcrafted",
        text: "Every cup is prepared with care.",
    },
    {
        icon: Heart,
        title: "Made with love",
        text: "Simple ingredients, thoughtful details.",
    },
    {
        icon: Sparkles,
        title: "Slow moments",
        text: "A space to pause and enjoy.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="
                relative overflow-hidden
                bg-[var(--cream-light)]
                px-5 py-20
                sm:px-8 sm:py-28
                lg:px-12 lg:py-36
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <SectionHeading
                    eyebrow="Our story"
                    title={
                        <>
                            More than just
                            <br />
                            <span className="italic text-[var(--caramel)]">
                                a cup of coffee.
                            </span>
                        </>
                    }
                    description="We created a cozy little corner for good coffee, meaningful conversations, and those moments when you simply want to slow down."
                />

                {/* Main content */}
                <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:items-center lg:gap-20">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto w-full max-w-lg"
                    >

                        {/* Decorative circle */}
                        <div
                            className="
                                absolute
                                -right-4 -top-4
                                h-24 w-24
                                rounded-full
                                border border-[var(--caramel)]/30
                                sm:-right-7 sm:-top-7
                                sm:h-32 sm:w-32
                            "
                        />

                        {/* Main image */}
                        <div
                            className="
                                relative
                                aspect-[4/5]
                                overflow-hidden
                                rounded-[45%_45%_20%_20%]
                                bg-[var(--coffee)]
                                shadow-[0_25px_60px_rgba(90,48,34,0.15)]
                            "
                        >
                            <Image
                                src="/images/cafe.jpg"
                                alt="Tungmo Cafe"
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                                className="
        object-cover
        transition-transform
        duration-700
        ease-out
        hover:scale-105
    "
                            />
                        </div>



                        {/* Floating note */}
                        <div
                            className="
                                absolute -bottom-5 -left-2
                                rounded-2xl
                                bg-[var(--cream)]
                                px-4 py-3
                                shadow-[0_12px_30px_rgba(90,48,34,0.12)]
                                sm:-left-6
                            "
                        >
                            <p className="font-serif text-sm italic text-[var(--coffee)]">
                                Stay a little longer.
                            </p>
                        </div>
                    </motion.div>

                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="text-base leading-8 text-[var(--brown-muted)] sm:text-lg">
                            There is something special about finding a place that makes you
                            want to put your phone away, take a sip, and stay for another
                            conversation.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-[var(--brown-muted)]">
                            That is what we wanted to create. A warm space where carefully
                            brewed coffee meets comforting food, friendly faces, and the
                            simple pleasure of taking things a little slower.
                        </p>

                        <a
                            href="#menu"
                            className="
                                group mt-7 inline-flex
                                items-center gap-2
                                border-b border-[var(--coffee)]
                                pb-1
                                text-sm font-medium
                                text-[var(--coffee)]
                            "
                        >
                            Discover our menu

                            <ArrowUpRight
                                size={16}
                                className="
                                    transition-transform duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>

                        {/* Highlights */}
                        <div
                            className="
                                mt-12
                                grid grid-cols-1 gap-6
                                border-t border-[var(--line)]
                                pt-8
                                sm:grid-cols-3
                                lg:grid-cols-1
                            "
                        >
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="
                                                flex h-10 w-10 shrink-0
                                                items-center justify-center
                                                rounded-full
                                                bg-[var(--cream)]
                                                text-[var(--coffee)]
                                            "
                                        >
                                            <Icon
                                                size={17}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-base text-[var(--coffee)]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-[var(--brown-muted)]">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}