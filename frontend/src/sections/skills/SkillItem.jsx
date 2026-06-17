import { motion } from "motion/react";
import { slideFromRight } from "../../animations/slideFromRight.js";

const SkillItem = ({ skill }) => {
    if (!skill) return null;

    const { label, icon: Icon } = skill;

    return (
        <motion.div
            variants={slideFromRight}
            className="flex flex-col items-center py-md px-lg gap-lg bg-card-bg rounded-lg border border-text/10"
        >
            <Icon className="w-3xl h-3xl text-primary" />

            <p className="text-body-sm font-body text-text-muted">{label}</p>
        </motion.div>
    )
}

export default SkillItem;