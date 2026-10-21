import { ArrowRight } from "lucide-react";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import SpotlightCard from "../../components/ui/SpotlightCard.jsx";

import { services } from "../../data/services.js";

const Services = () => {
    if (!services?.length) return null;

    return (
        <Section id="services">
            <Heading
                eyebrow="Services"
                title={<>What I can <span className="text-gradient">build for you</span></>}
                description="From a high-converting landing page to a complete SaaS product, I handle the full stack so you can focus on running your business."
            />

            <div className="grid gap-lg md:grid-cols-2">
                {services.map(({ id, title, description, tags, icon: Icon }, index) => (
                    <Reveal key={id} delay={index * .08} className="h-full">
                        <SpotlightCard className="group flex h-full flex-col gap-lg p-xl">
                            <div className="flex items-start justify-between">
                                <div className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary-light ring-1 ring-primary/30 shadow-[0_0_30px_-6px_rgba(113,70,247,.7)]">
                                    <Icon className="size-6" />
                                </div>
                                <span className="font-mono text-xs text-text/30">0{index + 1}</span>
                            </div>

                            <div className="flex flex-col gap-sm">
                                <h3 className="font-display text-h5 font-semibold text-text">{title}</h3>
                                <p className="text-body leading-relaxed text-text-muted text-pretty">{description}</p>
                            </div>

                            <div className="mt-auto flex items-end justify-between gap-md pt-sm">
                                <ul className="flex flex-wrap gap-sm">
                                    {tags.map(tag => (
                                        <li key={tag} className="rounded-pill border border-white/10 bg-white/[.03] px-md py-xs text-xs text-text-muted">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    aria-label={`Discuss a ${title.toLowerCase()} project`}
                                    className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-text-muted transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary group-hover:text-text"
                                >
                                    <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                                </a>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}

export default Services;
