import { Quote, Star } from "lucide-react";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import SpotlightCard from "../../components/ui/SpotlightCard.jsx";

import { testimonials } from "../../data/testimonials.js";

const getInitials = (name) => name.split(" ").map(part => part[0]).slice(0, 2).join("").toUpperCase();

const Testimonials = () => {
    if (!testimonials?.length) return null;

    return (
        <Section id="testimonials">
            <Heading
                eyebrow="Testimonials"
                title={<>Trusted by <span className="text-gradient">30+ happy clients</span></>}
                description="Don't just take my word for it. Here's what clients say about working with me."
            />

            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map(({ id, quote, name, role, rating }, index) => (
                    <Reveal key={id} delay={(index % 3) * .08} className="h-full">
                        <SpotlightCard as="figure" className="flex h-full flex-col gap-lg p-xl">
                            <div className="flex items-center justify-between">
                                {rating ? (
                                    <div className="flex gap-2xs text-[#FBBF24]" role="img" aria-label={`${rating} out of 5 stars`}>
                                        {Array.from({ length: rating }, (_, i) => <Star key={i} className="size-4 fill-current" />)}
                                    </div>
                                ) : <span />}
                                <Quote aria-hidden className="size-6 text-primary/60" />
                            </div>

                            <blockquote className="text-body leading-relaxed text-text text-pretty">"{quote}"</blockquote>

                            <figcaption className="mt-auto flex items-center gap-md border-t border-white/[.08] pt-lg">
                                <span className="grid size-10 place-items-center rounded-full bg-primary/20 font-display text-sm font-semibold text-primary-light ring-1 ring-primary/30">
                                    {getInitials(name)}
                                </span>
                                <span className="flex flex-col">
                                    <span className="font-medium text-text">{name}</span>
                                    {role && <span className="text-body-sm text-text-muted">{role}</span>}
                                </span>
                            </figcaption>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}

export default Testimonials;
