import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { staggerContainer } from "../../animations/staggerContainer.js";
import { fadeup } from "../../animations/fadeup.js";

import Container from "../../components/layout/Container.jsx";
import Button from "../../components/ui/Button.jsx";
import AnimatedNumber from "../../components/ui/AnimatedNumber.jsx";
import HeroVisual from "./HeroVisual.jsx";
import TechMarquee from "./TechMarquee.jsx";

import { stats } from "../../data/stats.js";


const Hero = () => {
    return (
        <section id="hero" className="relative pt-[clamp(7.5rem,15vw,10.5rem)]">
            <Container>
                <div className="grid items-center gap-3xl lg:grid-cols-[1.2fr_.8fr] lg:gap-2xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start gap-xl"
                    >
                        <motion.a
                            variants={fadeup}
                            href="#contact"
                            className="glass inline-flex items-center gap-sm rounded-pill py-xs pl-sm pr-md text-body-sm text-text-muted transition-colors hover:text-text"
                        >
                            <span className="relative flex size-2.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-success" />
                            </span>
                            Available for new projects
                        </motion.a>

                        <motion.h1
                            variants={fadeup}
                            className="font-display text-hero font-semibold leading-[1.04] tracking-tight text-balance"
                        >
                            I build fast, scalable web apps that{' '}
                            <span className="text-gradient">grow your business.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeup}
                            className="max-w-[54ch] text-body-lg leading-relaxed text-text-muted text-pretty"
                        >
                            Hi, I'm <span className="font-medium text-text">Ammar Hadid</span>, a full-stack developer specializing in{' '}
                            <span className="text-text">React, Next.js, TypeScript and WordPress</span>.
                            From custom web apps to webshops, I turn ideas into polished, production-ready products that are delivered on time and built to scale.
                        </motion.p>

                        <motion.div variants={fadeup} className="flex w-full flex-col gap-md sm:w-auto sm:flex-row">
                            <Button href="#contact" icon={ArrowRight}>Start your project</Button>
                            <Button href="#work" variant="ghost">View my work</Button>
                        </motion.div>

                        <motion.dl
                            variants={fadeup}
                            className="mt-sm grid w-full max-w-[520px] grid-cols-3 gap-lg border-t border-white/10 pt-xl"
                        >
                            {stats.map(stat => (
                                <div key={stat.id} className="flex flex-col-reverse justify-end gap-xs">
                                    <dt className="text-body-sm text-text-muted">{stat.label}</dt>
                                    <dd className="font-display text-h3 font-semibold leading-none text-text">
                                        <AnimatedNumber value={stat.value} inView />
                                        <span className="text-primary-light">{stat.suffix}</span>
                                    </dd>
                                </div>
                            ))}
                        </motion.dl>
                    </motion.div>

                    <HeroVisual />
                </div>
            </Container>

            <TechMarquee />
        </section>
    )
}

export default Hero;
