import StatItem from "./StatItem.jsx";


const StatsWrapper = ({ stats }) => {
    if (!stats?.length) return null;

    return (
        <div className="grid grid-cols-2 lg:gap-lg lg:grid-cols-4 bg-card-bg lg:divide-x divide-text/10 rounded-xl lg:py-lg border border-text/10">
            {stats.map((stat, index) => {
                return <StatItem key={stat.id} stat={stat} index={index} />
            })}
        </div>
    )
}

export default StatsWrapper;