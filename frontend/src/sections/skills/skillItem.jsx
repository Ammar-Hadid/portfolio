const SkillItem = ({ skill }) => {
    if (!skill) return null;

    const { label, icon: Icon } = skill;

    return (
        <div className="flex flex-col items-center py-md px-lg gap-lg bg-card-bg rounded-lg border border-text/10">
            <Icon className="w-3xl h-3xl text-primary" />

            <p className="text-body-sm font-body text-text-muted">{label}</p>
        </div>
    )
}

export default SkillItem;