import Step from "./Step.jsx";
import { motion } from "motion/react";

const StepsWrapper = ({ steps }) => {
    if (steps?.length < 1) return null;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5xl relative">
            {steps.map((step, index) => {
                return <Step key={step.id} step={step} index={index} />
            })}

            {/* Mobile pseudo line */}
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 6,
                    delay: .3,
                }}
                style={{
                    originY: 0,
                }}

                className="absolute w-px h-full z-0 bg-text/25 md:bg-transparent left-[25%] lg:hidden"
            />

            {/* Desktop pseudo line  */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    delay: .3,
                }}
                style={{
                    originX: 0,
                }}

                className="absolute z-0 lg:block lg:w-full lg:h-px  lg:bg-text/25 lg:top-[25%] lg:left-0 hidden"
            />

        </div>
    )
}

export default StepsWrapper