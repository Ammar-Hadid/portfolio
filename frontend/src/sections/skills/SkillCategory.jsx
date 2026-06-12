import SkillItem from "./skillItem.jsx";

const SkillCategory = ({ category, limit = category?.skills?.length ?? 5 }) => {
    if (!category) return null;

    const { label, skills } = category;

    if (skills?.length < 1) return null;

    return (
        <div className="flex flex-col gap-md">
            <h4 className="font-display uppercase text-body text-text-muted font-semibold tracking-widest">{label}</h4>

            <div className="flex flex-wrap lg:flex-nowrap gap-md">
                {skills
                    .slice(0, limit)
                    .map(skill => {
                        return <SkillItem key={skill.id} skill={skill} />
                    })}
            </div>
        </div >
    )
}

export default SkillCategory