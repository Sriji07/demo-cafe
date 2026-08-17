"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { galleryItems } from "@/data/gallery";

function GalleryImage({ item, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`
        group relative
        overflow-hidden
        rounded-[1.75rem]
        bg-[#ead8c5]
        ${className}
      `}
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
            />

            {/* Overlay */}
            <div
                className="
          absolute inset-0
          bg-gradient-to-t
          from-[rgba(40,20,14,0.65)]
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
            />

            {/* Caption */}
            <div
                className="
          absolute bottom-0 left-0 right-0
          flex items-end justify-between
          p-5
          opacity-0
          translate-y-3
          transition-all duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
            >
                <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                        {item.category}
                    </p>

                    <h3 className="mt-1 font-serif text-lg text-white">
                        {item.title}
                    </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--coffee)]">
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </motion.div>
    );
}

export default function Gallery() {
    const large = galleryItems.find((item) => item.size === "large");
    const wide = galleryItems.find((item) => item.size === "wide");

    const smallItems = galleryItems.filter(
        (item) => item.size === "small"
    );

    return (
        <section
            id="gallery"
            className="
        overflow-hidden
        bg-[var(--cream-light)]
        px-5 py-20
        sm:px-8 sm:py-28
        lg:px-12 lg:py-36
      "
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow="Inside Tungmo"
                        title={
                            <>
                                Little moments,
                                <br />
                                <span className="italic text-[var(--caramel)]">
                                    captured.
                                </span>
                            </>
                        }
                        description="A glimpse into the space, the people, and the moments that make our cafe feel like home."
                    />

                    <p className="hidden max-w-[180px] text-right text-xs leading-5 text-[var(--brown-muted)] sm:block">
                        Come in. Find your favourite corner. Stay awhile.
                    </p>
                </div>

                {/* Gallery */}
                <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-4">
                    {/* Large image */}
                    {large && (
                        <GalleryImage
                            item={large}
                            className="
                col-span-2
                aspect-[4/5]
                lg:row-span-2
                lg:aspect-auto
              "
                        />
                    )}

                    {/* Small images */}
                    {smallItems.slice(0, 2).map((item) => (
                        <GalleryImage
                            key={item.id}
                            item={item}
                            className="aspect-square"
                        />
                    ))}

                    {/* Wide image */}
                    {wide && (
                        <GalleryImage
                            item={wide}
                            className="
                col-span-2
                aspect-[16/8]
                lg:col-span-2
              "
                        />
                    )}

                    {/* Remaining small images */}
                    {smallItems.slice(2).map((item) => (
                        <GalleryImage
                            key={item.id}
                            item={item}
                            className="aspect-square"
                        />
                    ))}
                </div>

                {/* Bottom statement */}
                <div className="mt-12 flex flex-col items-start gap-5 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-serif text-2xl italic text-[var(--coffee)] sm:text-3xl">
                        "Stay for one more cup."
                    </p>

                    <a
                        href="#contact"
                        className="
              group flex items-center gap-2
              text-sm font-medium
              text-[var(--coffee)]
            "
                    >
                        Come visit us

                        <ArrowUpRight
                            size={16}
                            className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}