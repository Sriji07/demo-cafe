"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogs } from "@/data/blogs";

function BlogCard({ post, featured = false }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`
        group
        ${featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}
      `}
        >
            {/* Image */}
            <div
                className={`
          relative
          overflow-hidden
          rounded-[1.75rem]
          bg-[#ead8c5]
          ${featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"}
        `}
            >
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes={
                        featured
                            ? "(max-width: 1024px) 100vw, 60vw"
                            : "(max-width: 1024px) 100vw, 30vw"
                    }
                    className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
                />

                <div className="absolute left-4 top-4">
                    <span
                        className="
              rounded-full
              bg-[rgba(255,250,242,0.92)]
              px-3 py-1.5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-[var(--coffee)]
              backdrop-blur-sm
            "
                    >
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div
                className={`
          flex flex-col justify-center
          ${featured ? "p-6 sm:p-8 lg:p-12" : "pt-5"}
        `}
            >
                <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--brown-muted)]">
                        {post.date}
                    </span>

                    <span className="h-px w-5 bg-[var(--line)]" />
                </div>

                <h3
                    className={`
            font-serif
            leading-[1.05]
            text-[var(--coffee)]
            ${featured ? "mt-4 text-3xl sm:text-4xl lg:text-5xl" : "mt-3 text-2xl"}
          `}
                >
                    {post.title}
                </h3>

                <p
                    className={`
            leading-6 text-[var(--brown-muted)]
            ${featured ? "mt-5 max-w-md text-sm sm:text-base" : "mt-3 text-xs sm:text-sm"}
          `}
                >
                    {post.excerpt}
                </p>

                <a
                    href="#"
                    className="
            group/link
            mt-5
            flex w-fit items-center gap-2
            text-xs font-medium
            uppercase tracking-[0.12em]
            text-[var(--coffee)]
          "
                >
                    Read story

                    <span
                        className="
              flex h-7 w-7 items-center justify-center
              rounded-full
              border border-[var(--line)]
              transition-all duration-300
              group-hover/link:bg-[var(--coffee)]
              group-hover/link:text-[var(--cream-light)]
            "
                    >
                        <ArrowUpRight
                            size={13}
                            className="
                transition-transform duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
                        />
                    </span>
                </a>
            </div>
        </motion.article>
    );
}

export default function Blog() {
    const featuredPost = blogs.find((post) => post.featured);
    const regularPosts = blogs.filter((post) => !post.featured);

    return (
        <section
            id="blog"
            className="
        px-5 py-20
        sm:px-8 sm:py-28
        lg:px-12 lg:py-36
      "
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow="From the journal"
                        title={
                            <>
                                Stories worth
                                <br />
                                <span className="italic text-[var(--caramel)]">
                                    staying for.
                                </span>
                            </>
                        }
                        description="Coffee, food, people and little moments from our corner of the city."
                    />

                    <a
                        href="#"
                        className="
              hidden
              items-center gap-2
              text-sm font-medium
              text-[var(--coffee)]
              sm:flex
            "
                    >
                        View all stories
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Featured post */}
                {featuredPost && (
                    <div className="mt-12 sm:mt-16">
                        <BlogCard post={featuredPost} featured />
                    </div>
                )}

                {/* Other posts */}
                <div className="mt-12 grid gap-10 border-t border-[var(--line)] pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {regularPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Mobile all stories link */}
                <div className="mt-10 sm:hidden">
                    <a
                        href="#"
                        className="
              flex items-center justify-between
              border-b border-[var(--line)]
              pb-3
              text-sm font-medium
              text-[var(--coffee)]
            "
                    >
                        View all stories
                        <ArrowUpRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}