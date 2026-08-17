import { ArrowUpRight } from "lucide-react";
import { cafe } from "@/data/cafe";

export default function Footer() {
    return (
        <footer className="bg-[var(--coffee)] px-5 pb-6 pt-16 text-[var(--cream-light)] sm:px-8 sm:pt-20 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <span
                                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-[var(--cream-light)]
                  text-sm
                  text-[var(--coffee)]
                "
                            >
                                ☕
                            </span>

                            <span className="font-serif text-xl">
                                {cafe.name}
                            </span>
                        </div>

                        <p className="mt-6 max-w-sm font-serif text-3xl leading-tight text-[#f8ecdf] sm:text-4xl">
                            Good coffee.
                            <br />
                            <span className="italic text-[#d8b299]">
                                Slow moments.
                            </span>
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a994]">
                            Explore
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            <a
                                href="#about"
                                className="text-sm transition-opacity hover:opacity-60"
                            >
                                About
                            </a>

                            <a
                                href="#menu"
                                className="text-sm transition-opacity hover:opacity-60"
                            >
                                Menu
                            </a>

                            <a
                                href="#gallery"
                                className="text-sm transition-opacity hover:opacity-60"
                            >
                                Gallery
                            </a>

                            <a
                                href="#blog"
                                className="text-sm transition-opacity hover:opacity-60"
                            >
                                Journal
                            </a>

                            <a
                                href="#contact"
                                className="text-sm transition-opacity hover:opacity-60"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a994]">
                            Follow along
                        </p>

                        <a
                            href={cafe.social.instagram}
                            className="
                mt-5
                flex w-fit
                items-center gap-2
                text-sm
                transition-opacity
                hover:opacity-60
              "
                        >
                            <span className="text-base leading-none">◎</span>

                            Instagram

                            <ArrowUpRight size={14} />
                        </a>

                        <p className="mt-8 max-w-[220px] text-xs leading-5 text-[#c9a994]">
                            {cafe.address.line1}
                            <br />
                            {cafe.address.line2}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] text-[#c9a994]">
                        © {new Date().getFullYear()} {cafe.name}. All rights reserved.
                    </p>

                    <p className="text-[10px] text-[#c9a994]">
                        Made by Srijita.
                    </p>
                </div>
            </div>
        </footer>
    );
}