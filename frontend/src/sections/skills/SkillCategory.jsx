import SkillItem from "./skillItem.jsx";

import { motion } from "motion/react";
import { staggerContainer } from "../../animations/staggerContainer.js";

const SkillCategory = ({ category, limit = category?.skills?.length ?? 5 }) => {
    if (!category) return null;

    const { label, skills } = category;

    if (skills?.length < 1) return null;

    return (
        <div className="flex flex-col gap-md">
            <h4 className="font-display uppercase text-body text-text-muted font-semibold tracking-widest">{label}</h4>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: .2,
                }}
                className="flex flex-wrap lg:flex-nowrap gap-md"
            >
                {skills
                    .slice(0, limit)
                    .map(skill => {
                        return <SkillItem key={skill.id} skill={skill} />
                    })}
            </motion.div>
        </div >
    )
}

export default SkillCategory