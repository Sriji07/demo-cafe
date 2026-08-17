"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MenuCard({ item }) {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="
        group
        overflow-hidden
        rounded-[1.75rem]
        border border-[var(--line)]
        bg-[var(--cream-light)]
        shadow-[0_10px_35px_rgba(90,48,34,0.05)]
      "
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ead8c5]">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-5xl">
                        ☕
                    </div>
                )}

                {/* Tag */}
                {item.tag && (
                    <span
                        className="
              absolute left-4 top-4
              rounded-full
              bg-[var(--cream-light)]
              px-3 py-1.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-[var(--coffee)]
              shadow-sm
            "
                    >
                        {item.tag}
                    </span>
                )}

                {/* Arrow */}
                <div
                    className="
            absolute bottom-4 right-4
            flex h-9 w-9
            items-center justify-center
            rounded-full
            bg-[var(--cream-light)]
            text-[var(--coffee)]
            opacity-0
            shadow-sm
            transition-all
            duration-300
            group-hover:opacity-100
          "
                >
                    <ArrowUpRight size={16} />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-[var(--coffee)]">
                        {item.name}
                    </h3>

                    <span className="shrink-0 text-sm font-medium text-[var(--caramel)]">
                        ₹{item.price}
                    </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-[var(--brown-muted)] sm:text-sm">
                    {item.description}
                </p>
            </div>
        </motion.article>
    );
}