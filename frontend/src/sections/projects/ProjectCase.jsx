import { ArrowUpRight } from "lucide-react";

import Reveal from "../../components/ui/Reveal.jsx";

const LiveLink = ({ href, title }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${title} live demo`}
        className="group/link glass inline-flex shrink-0 items-center gap-sm self-start rounded-pill px-lg py-sm text-body-sm font-medium text-text transition-colors duration-300 hover:border-(--accent)/50 md:self-auto"
    >
        <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-(--accent) opacity-60" />
            <span className="relative size-2 rounded-full bg-(--accent)" />
        </span>
        Live demo
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
);

const TechStack = ({ stack }) => (
    <div className="flex flex-col gap-md">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">Tech stack</h4>

        <dl className="grid border-t border-white/[.08] lg:grid-cols-2 lg:gap-x-2xl">
            {stack.map(({ label, items }) => (
                <div
                    key={label}
                    className="grid gap-xs border-b border-white/[.08] py-md sm:grid-cols-[9.5rem_1fr] sm:gap-lg"
                >
                    <dt className="flex items-center gap-sm self-start pt-[0.2rem] font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-text-muted">
                        <span aria-hidden className="size-1 rounded-full bg-(--accent)" />
                        {label}
                    </dt>
                    <dd className="text-body-sm leading-relaxed text-text">
                        {items.map((item, index) => (
                            <span key={item} className="inline-block">
                                {item}
                                {index < items.length - 1 && <span aria-hidden className="mx-sm text-white/25">/</span>}
                            </span>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    </div>
);

const ProjectCase = ({ project, index }) => {
    const { id, title, type, accent, lead, description, stack, image, liveUrl } = project;

    if (!title || !lead) return null;

    const number = String(index + 1).padStart(2, "0");

    return (
        <article
            id={`project-${id}`}
            aria-labelledby={`project-${id}-title`}
            style={{ "--accent": accent }}
            className="flex flex-col gap-xl lg:gap-2xl"
        >
            <Reveal className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-md">
                    <div className="flex items-center gap-md font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                        <span className="text-(--accent)">{number}</span>
                        <span aria-hidden className="h-px w-10 bg-white/20" />
                        <span>{type}</span>
                    </div>
                    <h3
                        id={`project-${id}-title`}
                        className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[.95] tracking-tight text-text"
                    >
                        {title}
                    </h3>
                </div>

                {liveUrl && <LiveLink href={liveUrl} title={title} />}
            </Reveal>

            <Reveal amount={.1} className="relative isolate">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10 opacity-25 blur-3xl"
                    style={{ background: "radial-gradient(55% 55% at 50% 50%, var(--accent), transparent 70%)" }}
                />
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden
                    className="group/stage relative block overflow-hidden rounded-card border border-white/10 bg-card-bg shadow-[0_40px_100px_-30px_rgba(0,0,0,.9)]"
                >
                    <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-1000 ease-out group-hover/stage:scale-[1.015]"
                    />
                    <span aria-hidden className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-white/[.06]" />
                </a>
            </Reveal>

            <div className="grid gap-lg lg:grid-cols-12 lg:gap-2xl">
                <Reveal className="lg:col-span-5">
                    <p className="font-display text-h4 font-medium leading-snug text-balance text-text">{lead}</p>
                </Reveal>

                {description && (
                    <Reveal delay={.08} className="lg:col-span-7">
                        <p className="text-body leading-[1.8] text-text-muted text-pretty">{description}</p>
                    </Reveal>
                )}
            </div>

            {stack?.length > 0 && (
                <Reveal amount={.1}>
                    <TechStack stack={stack} />
                </Reveal>
            )}
        </article>
    );
};

export default ProjectCase;
