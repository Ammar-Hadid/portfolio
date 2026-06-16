import { motion } from "motion/react";
import { fadeup } from "../../animations/fadeup.js";

import { skills } from "../../data/skills.js";


import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";

import Heading from "../../components/ui/Heading.jsx"

import SkillCategory from "./SkillCategory.jsx";

import codeImg from "../../assets/images/skills/coding.png"

const Skills = () => {
    if (skills?.length < 1) return null;

    const leftCategories = skills.filter(
        category => category.id !== "learning"
    );

    const learningCategory = skills.find(
        category => category.id === "learning"
    );

    return (
        <Container>
            <Section id="skills" className="relative">
                <Heading subtitle={'My expertise'} title={'Skills & Technologies'} description="Here are the technologies and tools I work with to build modern web applications" />

                <div className="grid lg:grid-cols-[2fr_1fr] gap-3xl">
                    <div className="flex flex-col gap-3xl">
                        {leftCategories.map(category => (
                            <SkillCategory
                                key={category.id}
                                category={category}
                            />
                        ))}
                    </div>

                    <div>
                        <SkillCategory category={learningCategory} />
                    </div>
                </div>

                {codeImg && <img src={codeImg} className="hidden pointer-none lg:block absolute lg:w-[28vw] opacity-55 bottom-0 right-0" />}
            </Section>
        </Container>
    )
}

export default Skills