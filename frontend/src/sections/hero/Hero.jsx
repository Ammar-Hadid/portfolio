import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import DefaultButton from "../../components/defaultButton";
import heroImage from "../../assets/images/me-hero.png";


const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-row gap-xl lg:gap-0 w-full justify-between items-center bg-bg" id="hero">
            {/* Content */}
            <div className="flex flex-col items-start gap-lg md:pl-xl lg:pl-3xl">

                {/* Introduction */}
                <div className="flex flex-col justify-start gap-md lg:gap-0">

                    <div className="flex flex-col justify-start text-text gap-md lg:gap-0">
                        <p className="text-h5 font-body m-0 p-0 -mb-md">Hi, I'm</p>
                        <h1 className="text-hero font-bold font-display m-0 p-0">Ammar</h1>
                    </div>

                    <div className="text-h5 text-primary font-medium font-display -mt-md p-0">Full Stack Developer</div>
                </div>

                {/* Text & cta */}
                <div className="flex flex-col gap-md">
                    <p className="text-text text-body font-body tracking-[0.03em] leading-1xl max-w-[32ch]">I build modern, responsive and scalable web applications with clean code and great user experiences.</p>

                    <div className="flex flex-col gap-lg">
                        {/* Buttons */}
                        <div className="flex gap-md">
                            <DefaultButton text="View Projects" />
                            <DefaultButton text="Contact Me" variant="secondary" />
                        </div>

                        {/* Icons */}
                        <div className="flex gap-md">
                            <a
                                href="https://github.com/ElPridro"
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

                            <a
                                href="mailto:ammarhadid2005@gmail.com?subject=Portfolio Inquiry"
                                aria-label="Send me an email"
                            >
                                <MdEmail className="text-text-muted hover:text-text text-body-lg" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            {/* Image */}
            <img src={heroImage} alt="Ammar" className="hero-img" />
        </section>
    )
}

export default Hero;
