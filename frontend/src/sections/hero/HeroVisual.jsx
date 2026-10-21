import { motion } from "motion/react";
import { BadgeCheck, Zap } from "lucide-react";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

import heroImage from "../../assets/images/me-hero.webp";

const FloatingChip = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
            opacity: { duration: .5, delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        }}
        className={`glass absolute z-10 flex items-center gap-sm rounded-pill px-md py-sm text-body-sm whitespace-nowrap text-text shadow-[0_12px_40px_-12px_rgba(0,0,0,.8)] ${className}`}
    >
        {children}
    </motion.div>
);

const HeroVisual = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8, delay: .15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[440px]"
        >
            <div aria-hidden className="absolute -inset-8 rounded-full bg-primary/35 blur-[90px]" />

            <div className="relative rounded-[2rem] bg-linear-to-b from-white/30 via-primary/50 to-white/5 p-px">
                <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-card-bg">
                    <img
                        src={heroImage}
                        alt="Portrait of Ammar Hadid"
                        width="681"
                        height="627"
                        fetchPriority="high"
                        className="aspect-[681/627] w-full object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent" />
                    <div aria-hidden className="absolute inset-0 bg-grid opacity-40 mix-blend-overlay" />
                </div>
            </div>

            <FloatingChip className="-left-3 top-[12%] sm:-left-10" delay={.5}>
                <SiNextdotjs className="size-4" />
                Next.js & React
            </FloatingChip>

            <FloatingChip className="-right-2 top-[48%] sm:-right-8" delay={.8}>
                <SiTypescript className="size-4 text-[#3178C6]" />
                Type-safe code
            </FloatingChip>

            <FloatingChip className="bottom-[-1.25rem] left-[8%]" delay={1.1}>
                <BadgeCheck className="size-4 text-success" />
                99+ projects delivered
                <Zap className="size-4 text-primary-light" />
            </FloatingChip>
        </motion.div>
    )
}

export default HeroVisual;
