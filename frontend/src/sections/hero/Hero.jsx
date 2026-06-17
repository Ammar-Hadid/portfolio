import { motion } from "motion/react";
import { staggerContainer } from "../../animations/staggerContainer.js";
import { fadeup } from "../../animations/fadeup.js";
import { fadein } from "../../animations/fadein.js";
import { slideFromLeft } from "../../animations/slideFromLeft.js";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import DefaultButton from "../../components/DefaultButton.jsx";
import heroImage from "../../assets/images/me-hero.png";


const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-row gap-xl lg:gap-0 w-full justify-between items-center bg-bg" id="hero">
            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start gap-lg md:pl-xl lg:pl-3xl"
            >

                {/* Introduction */}
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col justify-start gap-md lg:gap-0">

                    <div className="flex flex-col justify-start text-text gap-md lg:gap-0">
                        <motion.p
                            variants={fadeup}
                            className="text-h5 font-body m-0 p-0 -mb-md">
                            Hi, I'm
                        </motion.p>
                        <motion.h1
                            variants={fadeup}
                            className="text-hero font-bold font-display m-0 p-0">Ammar
                        </motion.h1>
                    </div>

                    <motion.div
                        variants={fadeup}
                        className="text-h5 text-primary font-medium font-display -mt-md p-0">
                        Full Stack Developer
                    </motion.div>
                </motion.div>

                {/* Text & cta */}
                <motion.div
                    variants={slideFromLeft}
                    transition={{ delay: .6 }}
                    className="flex flex-col gap-md"
                >

                    <p className="text-text text-body font-body tracking-[0.03em] leading-xl max-w-[32ch]">I build modern, responsive and scalable web applications with clean code and great user experiences.</p>

                    <div className="flex flex-col gap-lg">
                        {/* Buttons */}
                        <div className="flex gap-md">
                            <DefaultButton href={'#projects'} >
                                Explore My Work
                            </DefaultButton>

                            <DefaultButton
                                variant="secondary"
                                href="/documents/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CV
                            </DefaultButton>
                        </div>

                        {/* Icons */}
                        <div className="flex gap-md">
                            <a
                                href="https://github.com/Ammar-Hadid"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                <FaGithub className="text-text-muted hover:text-text text-body-lg" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ammar-hadid-29326824b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Linkedin profile"
                            >
                                <FaLinkedin className="text-text-muted hover:text-text text-body-lg" />
                            </a>

                            <motion.a
                                href="mailto:hello@ammarhadid.com?subject=Portfolio Inquiry"
                                aria-label="Send me an email"
                            >
                                <MdEmail className="text-text-muted hover:text-text text-body-lg" />
                            </motion.a>

                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Image */}
            <motion.img
                variants={fadein}
                initial="hidden"
                animate="visible"
                transition={{ duration: .5, delay: .1 }}

                src={heroImage}
                alt="Ammar"
                className="hero-img" />
        </section>
    )
}

export default Hero;
