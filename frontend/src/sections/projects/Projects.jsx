import { ArrowRight } from "lucide-react";

import { projects } from "../../data/projects.js";

import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import ProjectCase from "./ProjectCase.jsx";

const Projects = () => {
    if (!projects.length) return null;

    return (
        <Section id="work">
            <Heading
                eyebrow="Selected work"
                title={<>Real products, <span className="text-gradient">shipped and live</span></>}
                description="A selection of products I've designed and built end-to-end, from the database to the pixels."
            />

            <div className="flex flex-col gap-[clamp(5rem,12vw,9rem)]">
                {projects.map((project, index) => (
                    <ProjectCase key={project.id} project={project} index={index} />
                ))}
            </div>

            <Reveal className="glass flex flex-col items-start justify-between gap-lg rounded-card p-xl sm:flex-row sm:items-center">
                <div className="flex flex-col gap-xs">
                    <p className="font-display text-h5 font-semibold">Want something like this for your business?</p>
                    <p className="text-body-sm text-text-muted">Tell me what you're building and I'll get back to you with a plan.</p>
                </div>
                <Button href="#contact" icon={ArrowRight}>Start your project</Button>
            </Reveal>
        </Section>
    );
};

export default Projects;
