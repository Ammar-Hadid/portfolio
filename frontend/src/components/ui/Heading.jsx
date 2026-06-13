const Heading = ({ subtitle, title, description = '' }) => {

    if (!subtitle || !title) {
        return null;
    }

    return (
        <div className="flex flex-col gap-sm">

            <div className="flex gap-md items-center">
                <div className="w-md lg:w-lg h-md lg:h-lg bg-primary"></div>
                <div className="text-primary uppercase text-h5">{subtitle}</div>
            </div>

            <h2 className="text-h2 font-display text-text capitalize">{title}</h2>

            {description && <p className="text-text-muted font-body text-body-lg text-pretty">{description}</p>}
        </div>
    )
}

export default Heading;