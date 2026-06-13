const Logo = ({ className = "" }) => {
    return (
        <a href="#hero">
            <p className={`text-body-lg font-display font-semibold ${className}`}>
                <span className="text-text">Ammar </span>
                <span className="text-primary">Hadid</span></p>
        </a>
    )
}

export default Logo;