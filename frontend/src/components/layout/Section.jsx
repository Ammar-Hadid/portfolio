import { motion } from "motion/react";
import { fadeup } from "../../animations/fadeup";

const Section = ({ children, id = '', className = '', animated = true }) => {

    const Component = animated ? motion.section : "section"

    return (
        <Component
            {...(animated &&
            {
                variants: fadeup,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: .1,
                }
            }
            )}
            className={`flex flex-col gap-2xl lg:gap-3xl ${className}`} id={id}>
            {children}
        </Component>
    )
}

export default Section