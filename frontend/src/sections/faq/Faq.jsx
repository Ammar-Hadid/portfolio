import { useState } from "react";
import { Plus } from "lucide-react";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";

import { faq } from "../../data/faq.js";

const FaqItem = ({ id, question, answer, isOpen, onToggle }) => {
    const panelId = `faq-panel-${id}`;

    return (
        <div className={`glass rounded-2xl transition-colors ${isOpen ? 'border-primary/40' : ''}`}>
            <h3>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-lg px-lg py-lg text-left font-display text-body-lg font-medium text-text cursor-pointer md:px-xl"
                >
                    {question}
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-primary bg-primary text-text' : 'border-white/15 text-text-muted'}`}>
                        <Plus className="size-4" />
                    </span>
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <p className="px-lg pb-lg text-body leading-relaxed text-text-muted text-pretty md:px-xl">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [openId, setOpenId] = useState(faq[0]?.id ?? null);

    if (!faq?.length) return null;

    return (
        <Section id="faq">
            <div className="grid gap-2xl lg:grid-cols-[.8fr_1.2fr] lg:gap-3xl">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <Heading
                        eyebrow="FAQ"
                        title={<>Questions? <span className="text-gradient">Answered.</span></>}
                        description="Everything you need to know before we start. Can't find your answer? Just send me a message."
                    />
                </div>

                <Reveal className="flex flex-col gap-md">
                    {faq.map(item => (
                        <FaqItem
                            key={item.id}
                            {...item}
                            isOpen={openId === item.id}
                            onToggle={() => setOpenId(prev => prev === item.id ? null : item.id)}
                        />
                    ))}
                </Reveal>
            </div>
        </Section>
    )
}

export default Faq;
