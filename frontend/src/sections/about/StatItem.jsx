import { useRef } from "react";
import { useInView } from "motion/react";

import AnimatedNumber from "../../components/ui/AnimatedNumber.jsx";

const StatItem = ({ stat, index }) => {
    const item = useRef(null);
    const inView = useInView(item, {
        once: true
    });

    if (!stat) return null;

    const { value, suffix, label } = stat;

    if (!value || !label) return null;

    const borderStyles = ['border-b border-r', 'border-b', 'border-r', ''];

    return (
        <div
            ref={item}
            className={`flex flex-col gap-md items-center ${borderStyles[index]} lg:border-b-0 border-text/10 p-xl lg:p-0`}
        >
            <span className="text-primary text-h2 font-display font-medium">
                <AnimatedNumber value={value} inView={inView} />
                {suffix}
            </span>
            <span className="text-text-muted text-body-sm font-body text-center">{label}</span>
        </div>
    )
}

export default StatItem;
