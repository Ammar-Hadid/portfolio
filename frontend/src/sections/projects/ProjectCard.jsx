import { Radio } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    if (!project) return null;

    const { id, image, title, description, technologies, wip = false, liveUrl, githubUrl } = project;

    if (!title || !description) {
        return null;
    }

    const urlStyles = "flex gap-md text-sm items-center hover:text-primary";
    const urlIconStyles = "w-lg h-lg text-primary";

    return (
        <article className="relative flex h-full min-h-136 md:min-h-0 flex-col gap-lg p-lg lg:pl-xl border border-text/10 rounded-xl text-text bg-card-bg">
            {wip && (
                <p className="absolute z-10 uppercase bg-primary py-sm px-2xl left-1/2 -translate-x-1/2 -top-sm -translate-y-1/2 font-semibold font-display">
                    WIP
                </p>
            )}

            <img src={image} alt={id} className="w-full aspect-16/10 object-cover" />

            <div className="flex flex-1 flex-col gap-lg lg:gap-xl">
                <div className="flex flex-col gap-sm">
                    <h3 className="text-body-lg font-display">{title}</h3>
                    <p className="text-text-muted text-pretty leading-7 font-body text-body">{description}</p>
                </div>

                {technologies?.length > 0 && (
                    <div className="flex gap-sm flex-wrap lg:flex-nowrap">
                        {technologies.map((technology, index) => (
                            <p
                                key={`${technology}-${index}`}
                                className="p-sm lg:p-md text-body-sm rounded-pill bg-card-bg border border-text/5 font-body"
                            >
                                {technology}
                            </p>
                        ))}
                    </div>
                )}

                <div className="mt-auto flex gap-lg font-body flex-wrap">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} live link`}
                            className={urlStyles}
                        >
                            <Radio className={urlIconStyles} />
                            Live demo
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} gitHub link`}
                            className={urlStyles}
                        >
                            <FaGithub className={urlIconStyles} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
