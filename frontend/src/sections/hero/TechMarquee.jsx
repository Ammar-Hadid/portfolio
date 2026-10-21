import { skills } from "../../data/skills.js";

const MARQUEE_IDS = ["nextjs", "react", "typescript", "wordpress", "nodejs", "express", "mongodb", "tailwind", "javascript", "docker", "figma", "git"];

const allSkills = skills.flatMap(category => category.skills);
const items = MARQUEE_IDS.map(id => allSkills.find(skill => skill.id === id)).filter(Boolean);

const TechMarquee = () => {
    return (
        <div className="mt-[clamp(4rem,9vw,6.5rem)] flex flex-col gap-lg">
            <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-text-muted">
                Technologies I ship with
            </p>

            <div className="mask-fade-x relative overflow-hidden border-y border-white/[.06] bg-white/[.015] py-lg">
                <ul className="animate-marquee flex w-max gap-3xl pr-3xl hover:[animation-play-state:paused]">
                    {[...items, ...items].map(({ id, label, icon: Icon }, index) => (
                        <li
                            key={`${id}-${index}`}
                            aria-hidden={index >= items.length}
                            className="flex items-center gap-sm whitespace-nowrap text-text-muted transition-colors hover:text-text"
                        >
                            <Icon className="size-6" />
                            <span className="font-display text-body-lg">{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechMarquee;
