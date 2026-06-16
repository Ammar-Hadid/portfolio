import { FaLayerGroup, FaHeart } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";


import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx"
import DefaultButton from "../../components/DefaultButton.jsx";

import ListItem from "./ListItem.jsx";
import StatsWrapper from "./StatsWrapper.jsx";

import meImg from "../../assets/images/about/me.png";

import { stats } from "../../data/stats.js";

import { motion } from "motion/react";
import { slideFromLeft } from "../../animations/slideFromLeft.js";
import { slideFromRight } from "../../animations/slideFromRight.js";

const About = () => {
    if (!stats) return null;

    return (
        <Container>
            <Section id="about">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-2xl lg:gap-0">

                    <motion.div
                        variants={slideFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: .3
                        }}
                        className="flex flex-col gap-xl w-full lg:w-[50%] lg:justify-between"
                    >
                        <div>
                            <Heading subtitle={'Get to know me'} title={'About me'} />
                            <p className="text-pretty text-body font-body text-text leading-xl">I'm Ammar, a full stack developer who codes not because I have to but because I genuinely love it. I started teaching myself before school ever came into the picture, and I haven't stopped since. Whether it's a weekend, an evening, or just a spare hour, you'll probably find me building something.</p>
                        </div>

                        <ul className="flex flex-col gap-md lg:gap-lg">
                            <ListItem icon={FaLayerGroup} label={'Building full stack web apps with the MERN stack'} />
                            <ListItem icon={FaBoltLightning} label={"Self-started, always pushing past what's expected"} />
                            <ListItem icon={IoMdSearch} label={'I dig into problems until I actually understand them'} />
                            <ListItem icon={FaHeart} label={"Coding is more than a career. It's what I'd do anyway."} />
                        </ul>

                        <DefaultButton href="/documents/cv.pdf" download >
                            Download CV
                        </DefaultButton>
                    </motion.div>

                    <motion.img
                        variants={slideFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: .4
                        }}
                        src={meImg}
                        alt={'Me standing and looking at the section with hand crossed.'}
                    />

                </div>

                <StatsWrapper stats={stats} />
            </Section>
        </Container>)
}

export default About