import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SpotlightCard from "../../components/ui/SpotlightCard.jsx";

const StatusBadge = ({ wip, comingSoon }) => {
    if (!wip && !comingSoon) return null;

    const styles = comingSoon
        ? "text-text"
        : "text-primary-light";

    return (
        <span className={`glass absolute left-md top-md z-10 inline-flex items-center gap-sm rounded-pill px-md py-xs font-mono text-xs uppercase tracking-widest ${styles}`}>
            <span className={`size-1.5 rounded-full ${comingSoon ? 'bg-text' : 'bg-primary-light animate-ping'}`} />
            {comingSoon ? 'Coming soon' : 'In active development'}
        </span>
    );
};

const ProjectCard = ({ project, wide = false }) => {
    if (!project) return null;

    const { image, title, type, description, technologies, wip = false, liveUrl, githubUrl, comingSoon } = project;

    if (!title || !description) {
        return null;
    }

    const layout = wide ? "lg:flex-row" : "";
    const imageLayout = wide ? "lg:w-[56%] lg:border-b-0 lg:border-r" : "";

    return (
        <SpotlightCard as="article" className={`group flex h-full flex-col overflow-hidden ${layout}`}>
            <div className={`relative shrink-0 overflow-hidden border-b border-white/[.08] bg-card-bg ${imageLayout}`}>
                <StatusBadge wip={wip} comingSoon={comingSoon} />
                <img
                    src={image}
                    alt={`${title} screenshot`}
                    loading="lazy"
                    className={`aspect-[16/10] size-full object-cover object-top transition-transform ${wide ? "lg:aspect-auto lg:object-left-top" : ""} duration-700 ease-out group-hover:scale-[1.04]`}
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-bg/40 to-transparent" />
            </div>

            <div className={`flex flex-1 flex-col gap-lg p-xl ${wide ? 'lg:justify-center lg:p-2xl' : ''}`}>
                <div className="flex flex-col gap-sm">
                    {type && <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">{type}</span>}
                    <h3 className={`font-display font-semibold text-text ${wide ? 'text-h3' : 'text-h4'}`}>{title}</h3>
                    <p className="text-body leading-relaxed text-text-muted text-pretty">{description}</p>
                </div>

                {technologies?.length > 0 && (
                    <ul className="flex flex-wrap gap-sm">
                        {technologies.map(technology => (
                            <li
                                key={technology}
                                className="rounded-pill border border-white/10 bg-white/[.03] px-md py-xs text-xs text-text-muted"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                )}

                {(liveUrl || githubUrl) && (
                    <div className="mt-auto flex flex-wrap items-center gap-lg pt-sm text-body-sm">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} live demo`}
                                className="group/link inline-flex items-center gap-xs font-medium text-text hover:text-primary-light transition-colors"
                            >
                                Live demo
                                <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </a>
                        )}

                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} source code on GitHub`}
                                className="inline-flex items-center gap-sm text-text-muted hover:text-text transition-colors"
                            >
                                <FaGithub className="size-4" />
                                Source code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </SpotlightCard>
    );
};

export default ProjectCard;
