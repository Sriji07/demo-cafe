"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cafe } from "@/data/cafe";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
                <nav
                    className="
            mx-auto flex max-w-7xl items-center justify-between
            rounded-full border border-[var(--line)]
            bg-[rgba(255,250,242,0.88)]
            px-5 py-3
            shadow-[0_8px_30px_rgba(90,48,34,0.08)]
            backdrop-blur-md
          "
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-2"
                        onClick={closeMenu}
                    >
                        <span
                            className="
                flex h-8 w-8 items-center justify-center
                rounded-full bg-[var(--coffee)]
                text-sm text-[var(--cream-light)]
              "
                        >
                            ☕
                        </span>

                        <span className="font-serif text-lg font-semibold tracking-wide text-[var(--coffee)]">
                            {cafe.name}
                        </span>
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-7 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="
                  text-sm text-[var(--brown-muted)]
                  transition-colors duration-300
                  hover:text-[var(--coffee)]
                "
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="
                flex items-center gap-1.5 rounded-full
                bg-[var(--coffee)] px-4 py-2
                text-sm text-[var(--cream-light)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--coffee-dark)]
              "
                        >
                            Visit us
                            <ArrowUpRight size={15} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsOpen(!isOpen)}
                        className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-[var(--coffee)]
              text-[var(--cream-light)]
              md:hidden
            "
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </header>

            {/* Mobile menu */}
            <div
                className={`
          fixed inset-0 z-40 flex flex-col justify-between
          bg-[var(--cream-light)]
          px-7 pb-8 pt-28
          transition-all duration-500
          md:hidden
          ${isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }
        `}
            >
                <div className="flex flex-col">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="
                border-b border-[var(--line)]
                py-5
                font-serif text-4xl
                text-[var(--coffee)]
                transition-transform duration-300
                hover:translate-x-2
              "
                            style={{
                                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[var(--brown-muted)]">
                            Find us
                        </p>

                        <p className="text-sm text-[var(--coffee)]">
                            {cafe.location}
                        </p>
                    </div>

                    <span className="text-4xl">☕</span>
                </div>
            </div>
        </>
    );
}