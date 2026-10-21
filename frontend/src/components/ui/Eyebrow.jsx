const Eyebrow = ({ children, className = "" }) => {
    return (
        <span className={`inline-flex items-center gap-sm rounded-pill border border-primary/30 bg-primary/10 px-md py-xs font-mono text-xs uppercase tracking-[0.2em] text-primary-light ${className}`}>
            <span className="size-1.5 rounded-full bg-primary-light shadow-[0_0_10px_2px_rgba(168,145,255,.7)]" />
            {children}
        </span>
    )
}

export default Eyebrow;
