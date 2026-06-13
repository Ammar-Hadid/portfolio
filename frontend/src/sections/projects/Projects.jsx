import { projects } from "../../data/projects.js";

import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx"
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    if (!projects.length) return null;

    return (
        <Container>
            <Section id="projects">
                <Heading subtitle={'My Work'} title={'Featured Projects'} description="Here are some of the projects I’ve built to solve real problems and improve my development skills." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {projects.map(project => {
                        return <ProjectCard key={project?.id} project={project} />
                    })}
                </div>
            </Section>
        </Container>
    )
}

export default Projects;