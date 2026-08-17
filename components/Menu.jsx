"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import { menuCategories } from "@/data/menu";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("coffee");

    const activeMenu = menuCategories.find(
        (category) => category.id === activeCategory
    );

    return (
        <section
            id="menu"
            className="
        relative overflow-hidden
        px-5 py-20
        sm:px-8 sm:py-28
        lg:px-12 lg:py-36
      "
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        eyebrow="From our kitchen"
                        title={
                            <>
                                Something for
                                <br />
                                <span className="italic text-[var(--caramel)]">
                                    every mood.
                                </span>
                            </>
                        }
                        description="From your first coffee of the morning to something sweet in the afternoon."
                    />

                    {/* Category navigation */}
                    <div
                        className="
              flex w-full
              overflow-x-auto
              rounded-full
              border border-[var(--line)]
              bg-[var(--cream-light)]
              p-1
              scrollbar-none
              lg:w-auto
            "
                    >
                        {menuCategories.map((category) => {
                            const isActive = activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`
                    relative
                    shrink-0
                    rounded-full
                    px-5 py-2.5
                    text-xs
                    font-medium
                    transition-colors
                    duration-300
                    sm:px-6
                    ${isActive
                                            ? "text-[var(--cream-light)]"
                                            : "text-[var(--brown-muted)] hover:text-[var(--coffee)]"
                                        }
                  `}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-menu-category"
                                            className="
                        absolute inset-0
                        -z-0
                        rounded-full
                        bg-[var(--coffee)]
                      "
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    <span className="relative z-10">
                                        {category.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Menu cards */}
                <div className="mt-12 sm:mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
                        >
                            {activeMenu?.items.map((item) => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom note */}
                <div className="mt-10 flex items-center justify-center">
                    <p className="text-center text-xs leading-5 text-[var(--brown-muted)]">
                        Prices may vary. Ask our team about today&apos;s specials.
                    </p>
                </div>
            </div>
        </section>
    );
}