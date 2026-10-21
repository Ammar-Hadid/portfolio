const VARIANTS = {
    primary: "bg-primary text-text shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_30px_-8px_rgba(113,70,247,.8)] hover:bg-[#7F58FF] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_14px_40px_-6px_rgba(113,70,247,1)] hover:-translate-y-0.5",
    ghost: "glass text-text hover:bg-white/[.07] hover:border-white/20",
};

const SIZES = {
    md: "px-xl py-[0.875rem] text-body-sm",
    sm: "px-lg py-sm text-sm",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    href,
    type = "button",
    className = "",
    ...props
}) => {
    const styles = `group inline-flex items-center justify-center gap-sm rounded-pill font-body font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ease-out disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

    const content = (
        <>
            {children}
            {Icon && <Icon aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
        </>
    );

    if (href) {
        return <a href={href} className={styles} {...props}>{content}</a>;
    }

    return <button type={type} className={styles} {...props}>{content}</button>;
};

export default Button;
