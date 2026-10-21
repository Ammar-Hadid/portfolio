import { skills } from "../../data/skills.js";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import SpotlightCard from "../../components/ui/SpotlightCard.jsx";

const Skills = () => {
    if (!skills?.length) return null;

    return (
        <Section id="stack">
            <Heading
                eyebrow="Tech stack"
                title={<>Modern tools, <span className="text-gradient">proven results</span></>}
                description="I use battle-tested technologies to build products that are fast, secure and easy to maintain long after launch."
            />

            <div className="grid gap-lg lg:grid-cols-3">
                {skills.map(({ id, label, description, skills: items }, index) => (
                    <Reveal key={id} delay={index * .08} className="h-full">
                        <SpotlightCard className="flex h-full flex-col gap-lg p-xl">
                            <div className="flex flex-col gap-xs">
                                <h3 className="font-display text-h5 font-semibold">{label}</h3>
                                <p className="text-body-sm text-text-muted">{description}</p>
                            </div>

                            <ul className="flex flex-wrap gap-sm">
                                {items.map(({ id: skillId, label: skillLabel, icon: Icon }) => (
                                    <li
                                        key={skillId}
                                        className="flex items-center gap-sm rounded-xl border border-white/[.06] bg-white/[.025] px-md py-sm text-body-sm text-text-muted transition-colors hover:border-primary/40 hover:text-text"
                                    >
                                        <Icon className="size-5 shrink-0 text-primary-light" />
                                        {skillLabel}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}

export default Skills
