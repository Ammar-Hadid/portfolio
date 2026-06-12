const StatItem = ({ stat, index }) => {
    if (!stat) return null;

    const { value, suffix, label } = stat;

    if (!value || !label) return null;

    const borderStyles = ['border-b border-r', 'border-b', 'border-r', ''];

    return (
        <div className={`flex flex-col gap-md items-center ${borderStyles[index]} lg:border-b-0 border-text/10 p-xl lg:p-0`}>
            <span className="text-primary text-h2 font-display font-medium">
                {value}
                {suffix}
            </span>
            <span className="text-text-muted text-body-sm font-body text-center">{label}</span>
        </div>
    )
}

export default StatItem;