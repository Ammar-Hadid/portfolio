import { motion } from "motion/react";
import { fadeup } from "../../animations/fadeup.js";

const Reveal = ({ children, delay = 0, as = "div", className = "", amount = .2 }) => {
    const Component = motion[as];

    return (
        <Component
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            transition={{ duration: .6, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </Component>
    )
}

export default Reveal;
