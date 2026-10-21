const SpotlightCard = ({ as: Component = "div", children, className = "", ...props }) => {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <Component
            onMouseMove={handleMouseMove}
            className={`spotlight glass rounded-card ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default SpotlightCard;
