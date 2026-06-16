import { animate } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const controls = animate(0, value, {
            duration: 2,
            onUpdate(current) {
                setCount(Math.floor(current));
            }
        })

        return () => controls.stop();
    }, [value, inView]);

    return <span>{count}</span>
}

export default AnimatedNumber;