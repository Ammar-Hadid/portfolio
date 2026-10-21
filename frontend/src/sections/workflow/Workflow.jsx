import { motion } from "motion/react";

import steps from "../../data/workflow.js";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";

const Workflow = () => {
    if (!steps?.length) return null;

    return (
        <Section id="process">
            <Heading
                eyebrow="Process"
                title={<>A clear process, <span className="text-gradient">zero surprises</span></>}
                description="You'll always know what's happening, what's next, and when it will be done."
            />

            <ol className="relative grid gap-xl lg:grid-cols-5 lg:gap-lg">
                <motion.div
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: .2, ease: "easeInOut" }}
                    style={{ originX: 0 }}
                    className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-linear-to-r from-primary/0 via-primary to-primary/0 lg:block"
                />
                <motion.div
                    aria-hidden
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: .2, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                    className="absolute bottom-8 left-7 top-8 w-px bg-linear-to-b from-primary via-primary/50 to-primary/0 lg:hidden"
                />

                {steps.map(({ id, title, description, icon: Icon }, index) => (
                    <Reveal
                        as="li"
                        key={id}
                        delay={index * .12}
                        className="relative flex gap-lg lg:flex-col lg:items-center lg:text-center"
                    >
                        <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/40 bg-bg text-primary-light shadow-[0_0_30px_-4px_rgba(113,70,247,.6)]">
                            <Icon className="size-6" />
                        </div>

                        <div className="flex flex-col gap-xs pt-xs lg:pt-0">
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">Step 0{index + 1}</span>
                            <h3 className="font-display text-h5 font-semibold text-text">{title}</h3>
                            <p className="text-body-sm leading-relaxed text-text-muted text-pretty">{description}</p>
                        </div>
                    </Reveal>
                ))}
            </ol>
        </Section>
    )
}

export default Workflow;
