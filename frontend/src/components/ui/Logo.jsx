const Logo = ({ className = "" }) => {
    return (
        <a href="#hero" aria-label="Ammar Hadid, back to top" className={`flex items-center gap-sm ${className}`}>
            <img src="/favicon.svg" alt="" className="size-8 rounded-lg" width="32" height="32" />
            <span className="whitespace-nowrap font-display text-body-lg font-semibold tracking-tight">
                <span className="text-text">Ammar </span>
                <span className="text-primary-light">Hadid</span>
            </span>
        </a>
    )
}

export default Logo;
