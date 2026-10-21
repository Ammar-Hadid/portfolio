import { ArrowRight, CheckCircle2, Download } from "lucide-react";

import Section from "../../components/layout/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import Button from "../../components/ui/Button.jsx";

import meImg from "../../assets/images/about/me.webp";
import { CV_PATH } from "../../constants/cv.js";

const REASONS = [
    "Clear, fast communication, so you're never left guessing",
    "Clean, documented code that's easy to maintain and scale",
    "On-time delivery with regular progress updates",
    "Performance, SEO and accessibility built in from day one",
];

const About = () => {
    return (
        <Section id="about">
            <div className="grid items-center gap-3xl lg:grid-cols-[.85fr_1.15fr]">
                <Reveal className="relative mx-auto w-full max-w-[420px]">
                    <div aria-hidden className="absolute inset-[12%] rounded-full bg-primary/40 blur-[80px]" />
                    <img
                        src={meImg}
                        alt="Ammar Hadid standing with arms crossed"
                        width="484"
                        height="587"
                        loading="lazy"
                        className="relative w-full"
                    />
                    <div className="glass absolute bottom-[8%] right-0 flex flex-col rounded-2xl px-lg py-md sm:-right-6">
                        <span className="font-display text-h4 font-semibold leading-none">5<span className="text-primary-light">+</span></span>
                        <span className="text-xs text-text-muted">years building for the web</span>
                    </div>
                </Reveal>

                <Reveal delay={.1} className="flex flex-col items-start gap-xl">
                    <div className="flex flex-col items-start gap-md">
                        <Eyebrow>About me</Eyebrow>
                        <h2 className="font-display text-h2 font-semibold leading-[1.1] tracking-tight text-balance">
                            A developer who treats <span className="text-gradient">your project like my own</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-md text-body leading-relaxed text-text-muted text-pretty">
                        <p>
                            I'm Ammar, a full-stack developer with <span className="text-text">5+ years of experience</span> building
                            web products for startups, small businesses and entrepreneurs. I've delivered <span className="text-text">99+ projects
                                for 30+ clients</span>, from custom React and Next.js applications to WordPress sites that teams can manage on their own.
                        </p>
                        <p>
                            I started coding long before it was my job, and that curiosity still drives me. I dig into problems until
                            I truly understand them, and I focus on what actually matters to you: a product that works, looks great,
                            loads fast and ships when I said it would.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-md">
                        {REASONS.map(reason => (
                            <li key={reason} className="flex items-start gap-md text-body text-text">
                                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-light" />
                                {reason}
                            </li>
                        ))}
                    </ul>

                    <div className="flex w-full flex-col gap-md sm:w-auto sm:flex-row">
                        <Button href="#contact" icon={ArrowRight}>Work with me</Button>
                        <Button href={CV_PATH} variant="ghost" download="Ammar-Hadid-CV.pdf" icon={Download}>
                            Download CV
                        </Button>
                    </div>
                </Reveal>
            </div>
        </Section>
    )
}

export default About
