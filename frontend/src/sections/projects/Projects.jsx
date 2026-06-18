import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../data/projects.js";

import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx";
import ProjectCard from "./ProjectCard.jsx";

const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;

    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;

    return 1;
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount);
    const [direction, setDirection] = useState(1);

    if (!projects.length) return null;

    const visibleProjects = useMemo(() => {
        return Array.from({ length: visibleCount }, (_, offset) => {
            const projectIndex = (currentIndex + offset) % projects.length;
            return projects[projectIndex];
        });
    }, [currentIndex, visibleCount]);

    const handlePrevious = () => {
        setDirection(-1);

        setCurrentIndex((prevIndex) => {
            return (prevIndex - 1 + projects.length) % projects.length;
        });
    };

    const handleNext = () => {
        setDirection(1);

        setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % projects.length;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container>
            <Section id="projects" className="gap-md md:gap-3xl">
                <div className="flex flex-col items-start md:flex-row md:items-end justify-between gap-lg">
                    <Heading
                        subtitle="My Work"
                        title="Featured Projects"
                        description="Here are some of the projects I’ve built to solve real problems and improve my development skills."
                    />

                    <div className="flex border w-full justify-between md:w-fit md:gap-lg">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            aria-label="Show previous projects"
                            className="text-primary grid place-items-center w-12 h-12 rounded-xl border border-text/15 bg-card-bg hover:border-primary transition-colors cursor-pointer"
                        >
                            <ChevronLeft strokeWidth={3} />
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Show next projects"
                            className="text-primary grid place-items-center w-12 h-12 rounded-xl border border-text/15 bg-card-bg hover:border-primary transition-colors cursor-pointer"
                        >
                            <ChevronRight strokeWidth={3} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-clip overflow-y-visible">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${currentIndex}-${visibleCount}`}
                            initial={{ x: direction > 0 ? "8%" : "-8%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? "-8%" : "8%", opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
                        >
                            {visibleProjects.map((project) => {
                                return (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* <div className="flex md:hidden justify-center gap-sm mt-lg">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Show previous projects"
                        className="text-primary grid place-items-center w-12 h-12 rounded-full border border-text/10 bg-card-bg hover:border-primary transition-colors cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Show next projects"
                        className="text-primary grid place-items-center w-12 h-12 rounded-full border border-text/10 bg-card-bg hover:border-primary transition-colors cursor-pointer"
                    >
                        <ChevronRight />
                    </button>
                </div> */}
            </Section>
        </Container>
    );
};

export default Projects;