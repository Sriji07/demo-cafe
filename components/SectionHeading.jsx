export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}) {
    return (
        <div
            className={`
        max-w-2xl
        ${align === "center" ? "mx-auto text-center" : ""}
      `}
        >
            <div
                className={`
          mb-4 flex items-center gap-3
          ${align === "center" ? "justify-center" : ""}
        `}
            >
                <span className="h-px w-8 bg-[var(--caramel)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--brown-muted)]">
                    {eyebrow}
                </span>
            </div>

            <h2
                className="
          font-serif
          text-4xl leading-[1]
          tracking-[-0.03em]
          text-[var(--coffee)]
          sm:text-5xl
          lg:text-6xl
        "
            >
                {title}
            </h2>

            {description && (
                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--brown-muted)] sm:text-base">
                    {description}
                </p>
            )}
        </div>
    );
}