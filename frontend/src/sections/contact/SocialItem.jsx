const SocialItem = ({ social }) => {
    if (!social) return null;

    const { href, label, icon, placeHolder } = social;

    if (!href || !label || !icon) return null;

    const Icon = icon;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} link`}
            className="flex items-center gap-md rounded-pill lg:p-sm lg:pr-xl transition-colors duration-300 ease-in-out hover:bg-primary-200"
        >
            <div className="rounded-full p-md bg-card-bg">
                <Icon className="text-primary w-lg h-lg" />
            </div>

            <div className="flex flex-col">
                <h4 className="font-display text-body text-text">{label}</h4>
                <p className="font-body text-body-sm text-text-muted ">{placeHolder}</p>
            </div>
        </a>
    )
}

export default SocialItem;

